import { useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import InterchangeBox from './interchange-box';
import { getCommonStarts, getLeadingDigits, MAX_TEXT_WIDTH } from './utils';

const getSpanningPart = (zhName: string, enName: string) => {
    const leadingDigits = getLeadingDigits(zhName);
    if (leadingDigits) {
        return { isDigit: true, spanningPart: leadingDigits };
    }
    const commonStarts = getCommonStarts(zhName, enName);
    if (commonStarts) {
        return { isDigit: false, spanningPart: commonStarts };
    }
    return { isDigit: false, spanningPart: '' };
};

export default function LineIconSpan(props: LineIconProps) {
    const {
        zhName,
        enName,
        foregroundColour,
        backgroundColour,
        zhClassName,
        enClassName,
        passed,
        children,
        spanDigits: _,
        ...others
    } = props;

    const { isDigit, spanningPart } = getSpanningPart(zhName, enName);

    const wrapperEl = useRef<SVGGElement | null>(null);
    const [bBox, setBBox] = useState({ x: 0, height: 0, width: 0 } as DOMRect);
    useEffect(() => {
        if (wrapperEl.current) setBBox(wrapperEl.current.getBBox());
    }, [zhName, enName]);

    const scale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, bBox.width);
    const dx = (-bBox.x - bBox.width / 2) * scale;
    const dy = (bBox.height * (1 - scale)) / 2;

    return (
        <g textAnchor="middle" fill={passed ? MonoColour.white : foregroundColour} {...others}>
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
                        {zhName.slice(spanningPart.length).trim()}
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
                        {isDigit ? enName : enName.slice(spanningPart.length).trim()}
                    </tspan>
                </text>
            </g>

            {children}
        </g>
    );
}
