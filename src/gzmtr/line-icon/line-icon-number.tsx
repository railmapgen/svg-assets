import { forwardRef, useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import InterchangeBox from './interchange-box';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import { getLeadingDigits, MAX_TEXT_WIDTH } from './utils';
import clsx from 'clsx';

export default forwardRef<SVGGElement, LineIconProps>(function LineIconNumber(props, ref) {
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

    const digitPart = getLeadingDigits(zhName) ?? '';

    const nameZhEl = useRef<SVGTextElement>(null);
    const nameEnEl = useRef<SVGTextElement>(null);

    const [nameZhBBox, setNameZhBBox] = useState({ x: 0, width: 0 } as DOMRect);
    const [nameEnBBox, setNameEnBBox] = useState({ width: 0 } as DOMRect);

    useEffect(() => {
        if (nameZhEl.current) setNameZhBBox(nameZhEl.current.getBBox());
        if (nameEnEl.current) setNameEnBBox(nameEnEl.current.getBBox());
    }, [zhName, enName]);

    const nameZhScale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, nameZhBBox.width);
    const nameEnScale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, nameEnBBox.width);

    const transforms = {
        nameZh: {
            // 7.3 -- original y
            // 13.5 -- text height
            // (1 - scale) -- offset multiplier
            // scale -- visualisation offset
            // 2 -- divide into halves (top and bottom)ø
            x: -(nameZhBBox.x + nameZhBBox.width / 2) * nameZhScale,
            y: 7.3 + ((13.5 * (1 - nameZhScale) * nameZhScale) / 2) * nameZhScale,
        },
        nameEn: {
            y: 19.5 - (9 * (1 - nameEnScale) * nameEnScale) / 2,
        },
    };

    return (
        <g
            ref={ref}
            fill={passed ? MonoColour.white : foregroundColour}
            className={clsx(classNames?.wrapper, className)}
            {...others}
        >
            <InterchangeBox fill={passed ? '#aaa' : backgroundColour} />
            <g
                ref={nameZhEl}
                transform={`translate(${transforms.nameZh.x},${transforms.nameZh.y})scale(${nameZhScale})`}
            >
                <text
                    ref={nameZhEl}
                    fontSize={16}
                    textAnchor="end"
                    y={0.7}
                    dominantBaseline="central"
                    className={classNames?.digits}
                    {...textProps?.digits}
                >
                    {digitPart}
                </text>
                <text
                    fontSize={12}
                    textAnchor="start"
                    dominantBaseline="central"
                    className={classNames?.zh}
                    {...textProps?.zh}
                >
                    {zhName.slice(digitPart.length)}
                </text>
            </g>
            <text
                ref={nameEnEl}
                fontSize={8}
                textAnchor="middle"
                transform={`translate(0,${transforms.nameEn.y})scale(${nameEnScale})`}
                dominantBaseline="middle"
                className={classNames?.en}
                {...textProps?.en}
            >
                {enName}
            </text>

            {children}
        </g>
    );
});
