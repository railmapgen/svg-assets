import { ReactNode, SVGProps, useEffect, useRef, useState } from 'react';

const TEXT_MAX_WIDTH = 15;

export interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
    asOutline?: boolean;
    padding?: number;
}

export interface GenericStationNumberProps extends SVGProps<SVGGElement> {
    Icon: (props: StationIconProps) => ReactNode;
    lineNum?: string;
    stnNum?: string;
    strokeColour: string;
    passed?: boolean;
    size?: 'sm' | 'md' | 'lg';
    textClassName?: string;
}

export default function GenericStationNumber(props: GenericStationNumberProps) {
    const { Icon, lineNum, stnNum, strokeColour, passed, size, textClassName, ...others } = props;

    const lineNumEl = useRef<SVGTextElement | null>(null);
    const stnNumEl = useRef<SVGTextElement | null>(null);

    const [lineNumBBox, setLineNumBBox] = useState({ width: 0 } as DOMRect);
    const [stnNumBBox, setStnNumBBox] = useState({ width: 0 } as DOMRect);

    useEffect(() => {
        lineNumEl.current && setLineNumBBox(lineNumEl.current.getBBox());
        stnNumEl.current && setStnNumBBox(stnNumEl.current.getBBox());
    }, [lineNum, stnNum]);

    const lineNumScale = TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, lineNumBBox.width);
    const stnNumScale =
        lineNum?.length === 2 && stnNum?.length === 2
            ? lineNumScale
            : TEXT_MAX_WIDTH / Math.max(TEXT_MAX_WIDTH, stnNumBBox.width);

    const scale = size === 'sm' ? '0.7' : size === 'lg' ? '1.4' : 1;

    return (
        <g {...others}>
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
        </g>
    );
}
