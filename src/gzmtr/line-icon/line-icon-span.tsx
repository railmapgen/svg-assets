import { forwardRef, useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import InterchangeBox from './interchange-box';
import { getCommonStarts, getLeadingDigits, MAX_TEXT_WIDTH } from './utils';
import clsx from 'clsx';

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

export default forwardRef<SVGGElement, LineIconProps>(function LineIconSpan(props, ref) {
    const {
        zhName,
        enName,
        foregroundColour,
        backgroundColour,
        passed,
        spanDigits: _,
        className,
        classNames,
        children,
        textProps,
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
        <g
            ref={ref}
            textAnchor="middle"
            fill={passed ? MonoColour.white : foregroundColour}
            className={clsx(classNames?.wrapper, className)}
            {...others}
        >
            <InterchangeBox fill={passed ? '#aaa' : backgroundColour} />
            <g ref={wrapperEl} transform={`translate(${dx},${dy})scale(${scale})`}>
                <text
                    fontSize={21}
                    x={-1}
                    y={12}
                    textAnchor="end"
                    dominantBaseline="central"
                    className={classNames?.digits}
                    {...textProps?.digits}
                >
                    {spanningPart}
                </text>
                <text
                    fontSize={10}
                    x={0}
                    y={8}
                    textAnchor="start"
                    dominantBaseline="central"
                    className={classNames?.zh}
                    {...textProps?.zh}
                >
                    {zhName.slice(spanningPart.length).trim()}
                </text>
                <text
                    fontSize={6.5}
                    letterSpacing={-0.1}
                    x={0}
                    y={18}
                    textAnchor="start"
                    dominantBaseline="middle"
                    className={classNames?.en}
                    {...textProps?.en}
                >
                    {isDigit ? enName : enName.slice(spanningPart.length).trim()}
                </text>
            </g>

            {children}
        </g>
    );
});
