import { useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import InterchangeBox from './interchange-box';
import { MonoColour } from '@railmapgen/rmg-palette-resources';

export default function LineIconLong(props: LineIconProps) {
    const { lineName, foregroundColour, backgroundColour, zhClassName, enClassName, passed } = props;

    const wrapperEl = useRef<SVGGElement | null>(null);

    const [bBox, setBBox] = useState({ width: 0 } as DOMRect);

    useEffect(() => {
        wrapperEl.current && setBBox(wrapperEl.current.getBBox());
    }, [lineName.toString()]);

    const boxWidth = Math.max(45, bBox.width + 4);

    return (
        <g textAnchor="middle" fill={passed ? MonoColour.white : foregroundColour}>
            <InterchangeBox customWidth={boxWidth} fill={passed ? '#aaa' : backgroundColour} />
            <g ref={wrapperEl}>
                <text className={zhClassName} fontSize={8.5} y={8} dominantBaseline="central">
                    {lineName[0]}
                </text>
                <text className={enClassName} fontSize={5.5} y={18} dominantBaseline="middle">
                    {lineName[1]}
                </text>
            </g>
        </g>
    );
}
