import { forwardRef, useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import InterchangeBox from './interchange-box';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import { MAX_TEXT_WIDTH } from './utils';
import clsx from 'clsx';

export default forwardRef<SVGGElement, LineIconProps>(function LineIconText(props, ref) {
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

    const nameZhEl = useRef<SVGTextElement | null>(null);
    const nameEnEl = useRef<SVGTextElement | null>(null);

    const [nameZhBBox, setNameZhBBox] = useState({ width: 0 } as DOMRect);
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
            // 2 -- divide into halves (top and bottom)
            y: 7.3 + (13.5 * (1 - nameZhScale) * nameZhScale) / 2,
        },
        nameEn: {
            y: 19.5 - (9 * (1 - nameEnScale) * nameEnScale) / 2,
        },
    };

    return (
        <g
            ref={ref}
            textAnchor="middle"
            fill={passed ? MonoColour.white : foregroundColour}
            className={clsx(classNames?.wrapper, className)}
            {...others}
        >
            <InterchangeBox fill={passed ? '#aaa' : backgroundColour} />
            <text
                ref={nameZhEl}
                fontSize={12}
                transform={`translate(0,${transforms.nameZh.y})scale(${nameZhScale})`}
                dominantBaseline="central"
                className={classNames?.zh}
                {...textProps?.zh}
            >
                {zhName}
            </text>
            <text
                ref={nameEnEl}
                fontSize={8}
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
