import { ExoticComponent, forwardRef, SVGProps, useContext, useEffect, useRef, useState } from 'react';
import SvgAssetsContext from '../../utils/context/svg-assets-context';
import clsx from 'clsx';

export const TEXT_MAX_WIDTH = 17;
const FONTS = ['Arial'];

interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
    bolder?: boolean;
}

type StationNumberSelector = 'wrapper' | 'digits';

export interface GenericStationNumberProps extends SVGProps<SVGGElement> {
    Icon: ExoticComponent<StationIconProps>;
    lineNum?: string;
    stnNum?: string;
    strokeColour: string;
    passed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    classNames?: Partial<Record<StationNumberSelector, SVGProps<SVGGElement>['className']>>;
    textProps?: Omit<SVGProps<SVGTextElement>, 'className'>;
    // For RMG
    bolderBorder?: boolean;
    // For RMG Guangzhou Line 11
    alwaysShowColouredBorder?: boolean;
    // Use same scale in line and station numbers. (Guangfo Line in RMG)
    useSameScale?: boolean;
}

export default forwardRef<SVGGElement, GenericStationNumberProps>(function GenericStationNumber(props, ref) {
    const {
        Icon,
        lineNum,
        stnNum,
        strokeColour,
        passed,
        size,
        bolderBorder,
        alwaysShowColouredBorder,
        useSameScale,
        className,
        classNames,
        children,
        textProps,
        ...others
    } = props;

    const { updateId } = useContext(SvgAssetsContext);

    const lineNumEl = useRef<SVGTextElement | null>(null);
    const stnNumEl = useRef<SVGTextElement | null>(null);

    const [lineNumBBox, setLineNumBBox] = useState({ width: 0 } as DOMRect);
    const [stnNumBBox, setStnNumBBox] = useState({ width: 0 } as DOMRect);

    const updateBBox = () => {
        if (lineNumEl.current) setLineNumBBox(lineNumEl.current.getBBox());
        if (stnNumEl.current) setStnNumBBox(stnNumEl.current.getBBox());
    };

    useEffect(() => {
        const abortController = new AbortController();
        updateBBox();
        document.fonts
            .load('12px ' + FONTS.join(', '), (lineNum ?? '') + (stnNum ?? ''))
            .then()
            .finally(() => {
                setTimeout(() => {
                    if (!abortController.signal.aborted) {
                        updateBBox();
                    }
                }, 100);
            });

        return () => {
            abortController.abort();
        };
    }, [lineNum, stnNum, updateId]);

    const isLineNumLengthGreaterThanTwo = lineNum && lineNum.length > 2;
    const isStationNumLengthGreaterThanTwo = stnNum && stnNum.length > 2;
    useEffect(() => {
        if (useSameScale && (isLineNumLengthGreaterThanTwo || isStationNumLengthGreaterThanTwo)) {
            console.warn(
                'GenericStationNumber(), useSameScale props does not work when lineNum has more than 2 characters'
            );
        }
    }, [useSameScale, isLineNumLengthGreaterThanTwo, isStationNumLengthGreaterThanTwo]);

    const lineNumScale = TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, lineNumBBox.width);
    const stnNumScale =
        useSameScale && !isLineNumLengthGreaterThanTwo && !isStationNumLengthGreaterThanTwo
            ? lineNumScale
            : TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, stnNumBBox.width);

    const scale = size === 'sm' ? '0.7' : size === 'lg' ? '1.6' : 1;

    return (
        <g ref={ref} className={clsx(classNames?.wrapper, className)} {...others}>
            <g transform={`scale(${scale})`}>
                <Icon
                    stroke={passed && !alwaysShowColouredBorder ? '#aaa' : strokeColour}
                    filled={!lineNum && !stnNum}
                    bolder={bolderBorder}
                />
                {(lineNum || stnNum) && (
                    <g textAnchor="middle" fontSize={13.5} fill={passed ? '#aaa' : '#000'}>
                        <g transform={`translate(-9.25,0)scale(${lineNumScale})`}>
                            <text
                                ref={lineNumEl}
                                dominantBaseline="central"
                                x={0.5}
                                className={classNames?.digits}
                                {...textProps}
                            >
                                {lineNum}
                            </text>
                        </g>
                        <g transform={`translate(9.25,0)scale(${stnNumScale})`}>
                            <text
                                ref={stnNumEl}
                                dominantBaseline="central"
                                className={classNames?.digits}
                                {...textProps}
                            >
                                {stnNum}
                            </text>
                        </g>
                    </g>
                )}
            </g>

            {children}
        </g>
    );
});
