import { useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import InterchangeBox from './interchange-box';
import { getCommonStarts, getLeadingDigits, MAX_TEXT_WIDTH, Name } from './utils';

const getSpanningPart = (name: Name) => {
    const leadingDigits = getLeadingDigits(name);
    if (leadingDigits) {
        return { isDigit: true, spanningPart: leadingDigits };
    }
    const commonStarts = getCommonStarts(name);
    if (commonStarts) {
        return { isDigit: false, spanningPart: commonStarts };
    }
    return { isDigit: false, spanningPart: '' };
};

export default function LineIconSpan(props: LineIconProps) {
    const { lineName, foregroundColour, backgroundColour, zhClassName, enClassName, passed } = props;

    const { isDigit, spanningPart } = getSpanningPart(lineName);

    const wrapperEl = useRef<SVGGElement | null>(null);
    const [bBox, setBBox] = useState({ x: 0, height: 0, width: 0 } as DOMRect);
    useEffect(() => {
        wrapperEl.current && setBBox(wrapperEl.current.getBBox());
    }, [lineName.toString()]);

    const scale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, bBox.width);
    const dx = (-bBox.x - bBox.width / 2) * scale;
    const dy = (bBox.height * (1 - scale)) / 2;

    return (
        <g textAnchor="middle" fill={passed ? MonoColour.white : foregroundColour}>
            <InterchangeBox fill={passed ? '#aaa' : backgroundColour} />
            <g ref={wrapperEl} transform={`translate(${dx},${dy})scale(${scale})`}>
                <text className={zhClassName} fontSize={21} x={-1} y={12} textAnchor="end" dominantBaseline="central">
                    {spanningPart}
                    <tspan
                        className={zhClassName}
                        fontSize={10}
                        x={0}
                        dy={-4}
                        textAnchor="start"
                        dominantBaseline="central"
                    >
                        {lineName[0].slice(spanningPart.length).trim()}
                    </tspan>
                    <tspan
                        className={enClassName}
                        fontSize={6.5}
                        letterSpacing={-0.1}
                        x={0}
                        dy={10}
                        textAnchor="start"
                        dominantBaseline="middle"
                    >
                        {isDigit ? lineName[1] : lineName[1].slice(spanningPart.length).trim()}
                    </tspan>
                </text>
            </g>
        </g>
    );
}
