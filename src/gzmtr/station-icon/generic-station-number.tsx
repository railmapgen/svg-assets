import { ExoticComponent, forwardRef, SVGProps, useContext, useEffect, useRef, useState } from 'react';
import SvgAssetsContext from '../../utils/context/svg-assets-context';

const TEXT_MAX_WIDTH = 15;

interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
}

export interface GenericStationNumberProps extends SVGProps<SVGGElement> {
    Icon: ExoticComponent<StationIconProps>;
    lineNum?: string;
    stnNum?: string;
    strokeColour: string;
    passed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    textClassName?: string;
}

const GenericStationNumber = forwardRef<SVGGElement, GenericStationNumberProps>(
    function GenericStationNumber(props, ref) {
        const { Icon, lineNum, stnNum, strokeColour, passed, size, textClassName, children, ...others } = props;

        const { updateId } = useContext(SvgAssetsContext);

        const lineNumEl = useRef<SVGTextElement | null>(null);
        const stnNumEl = useRef<SVGTextElement | null>(null);

        const [lineNumBBox, setLineNumBBox] = useState({ width: 0 } as DOMRect);
        const [stnNumBBox, setStnNumBBox] = useState({ width: 0 } as DOMRect);

        useEffect(() => {
            if (lineNumEl.current) setLineNumBBox(lineNumEl.current.getBBox());
            if (stnNumEl.current) setStnNumBBox(stnNumEl.current.getBBox());
        }, [lineNum, stnNum, updateId]);

        const lineNumScale = TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, lineNumBBox.width);
        const stnNumScale =
            lineNum?.length === 2 && stnNum?.length === 2
                ? lineNumScale
                : TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, stnNumBBox.width);

        const scale = size === 'sm' ? '0.7' : size === 'lg' ? '1.4' : 1;

        return (
            <g ref={ref} {...others}>
                <g transform={`scale(${scale})`}>
                    <Icon stroke={passed ? '#aaa' : strokeColour} filled={!lineNum && !stnNum} />
                    {(lineNum || stnNum) && (
                        <g textAnchor="middle" fontSize={13.5} fill={passed ? '#aaa' : '#000'}>
                            <g transform={`translate(-9.25,0)scale(${lineNumScale})`}>
                                <text ref={lineNumEl} className={textClassName} dominantBaseline="central" x={0.5}>
                                    {lineNum}
                                </text>
                            </g>
                            <g transform={`translate(9.25,0)scale(${stnNumScale})`}>
                                <text ref={stnNumEl} className={textClassName} dominantBaseline="central">
                                    {stnNum}
                                </text>
                            </g>
                        </g>
                    )}
                </g>

                {children}
            </g>
        );
    }
);

export default GenericStationNumber;
