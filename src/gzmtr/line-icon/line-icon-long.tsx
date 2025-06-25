import { forwardRef, useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import InterchangeBox from './interchange-box';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import clsx from 'clsx';

export default forwardRef<SVGGElement, LineIconProps>(function LineIconLong(props, ref) {
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

    const wrapperEl = useRef<SVGGElement | null>(null);

    const [bBox, setBBox] = useState({ width: 0 } as DOMRect);

    useEffect(() => {
        if (wrapperEl.current) setBBox(wrapperEl.current.getBBox());
    }, [zhName, enName]);

    const boxWidth = Math.max(45, bBox.width + 4);

    return (
        <g
            ref={ref}
            textAnchor="middle"
            fill={passed ? MonoColour.white : foregroundColour}
            className={clsx(classNames?.wrapper, className)}
            {...others}
        >
            <InterchangeBox customWidth={boxWidth} fill={passed ? '#aaa' : backgroundColour} />
            <g ref={wrapperEl}>
                <text fontSize={8.5} y={8} dominantBaseline="central" className={classNames?.zh} {...textProps?.zh}>
                    {zhName}
                </text>
                <text fontSize={5.5} y={18} dominantBaseline="middle" className={classNames?.en} {...textProps?.en}>
                    {enName}
                </text>
            </g>

            {children}
        </g>
    );
});
