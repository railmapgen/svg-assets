import { useEffect, useRef, useState } from 'react';
import { LineIconProps } from './line-icon';
import InterchangeBox from './interchange-box';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import { MAX_TEXT_WIDTH } from './utils';

export default function LineIconNumber(props: LineIconProps) {
    const { lineName, foregroundColour, backgroundColour, zhClassName, enClassName, passed } = props;

    const digitPart = lineName[0].match(/^(\d+)\D+$/)?.[1] ?? '';

    const nameZhEl = useRef<SVGTextElement | null>(null);
    const nameEnEl = useRef<SVGTextElement | null>(null);

    const [nameZhBBox, setNameZhBBox] = useState({ width: 0 } as DOMRect);
    const [nameEnBBox, setNameEnBBox] = useState({ width: 0 } as DOMRect);

    useEffect(() => {
        nameZhEl.current && setNameZhBBox(nameZhEl.current.getBBox());
        nameEnEl.current && setNameEnBBox(nameEnEl.current.getBBox());
    }, [lineName.toString()]);

    const nameZhScale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, nameZhBBox.width);
    const nameEnScale = MAX_TEXT_WIDTH / Math.max(MAX_TEXT_WIDTH, nameEnBBox.width);

    const transforms = {
        nameZh: {
            // 7.3 -- original y
            // 13.5 -- text height
            // (1 - scale) -- offset multiplier
            // scale -- visualisation offset
            // 2 -- divide into halves (top and bottom)ø
            y: 7.3 + (13.5 * (1 - nameZhScale) * nameZhScale) / 2,
        },
        nameEn: {
            y: 19.5 - (9 * (1 - nameEnScale) * nameEnScale) / 2,
        },
    };

    return (
        <g textAnchor="middle" fill={passed ? MonoColour.white : foregroundColour}>
            <InterchangeBox fill={passed ? '#aaa' : backgroundColour} />
            <text
                ref={nameZhEl}
                className={zhClassName}
                fontSize={12}
                transform={`translate(0,${transforms.nameZh.y})scale(${nameZhScale})`}
                dominantBaseline="central"
            >
                <tspan fontSize={16} dy={0.7} dominantBaseline="central">
                    {digitPart}
                </tspan>
                <tspan dy={-0.7} dominantBaseline="central">
                    {lineName[0].slice(digitPart.length)}
                </tspan>
            </text>
            <text
                ref={nameEnEl}
                className={enClassName}
                fontSize={8}
                transform={`translate(0,${transforms.nameEn.y})scale(${nameEnScale})`}
                dominantBaseline="middle"
            >
                {lineName[1]}
            </text>
        </g>
    );
}
