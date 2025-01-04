import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH, ICON_STROKE_WIDTH } from '../constants';
import FMetroStationIcon from '../../fmetro/station-icon/station-icon';
import StationIcon from './station-icon';
import FMetroStationNumber from '../../fmetro/station-icon/station-number';
import StationNumber from './station-number';
import { SVGProps, useMemo } from 'react';

type Coordinates = [number, number];

// An arithmetic sequence where elements are located symmetrically around zero.
const getArithmeticSeq = (size: number, multiplier: number) => {
    return Array.from(Array(size).keys()).map(x => (x - (size - 1) / 2) * multiplier);
};

export const getTranslates = (size: number, columns: number): Coordinates[] => {
    if (size <= 0) {
        return [];
    }
    if (size === 1) {
        return [[0, 0]];
    }

    // columns cannot greater than size
    const actualColumns = columns > size ? size : columns;

    const xMultiplier = ICON_FULL_WIDTH;
    const yMultiplier = ICON_FULL_HEIGHT;

    const xs = getArithmeticSeq(actualColumns, xMultiplier);
    const rows = Math.ceil(size / actualColumns);
    const ys = getArithmeticSeq(rows, yMultiplier);

    const remainder = size % actualColumns;
    const results: Coordinates[] = [];
    for (let r = 0; r < rows; r++) {
        if (remainder === 0 || r !== rows - 1) {
            for (let c = 0; c < actualColumns; c++) {
                results.push([xs[c], ys[r]]);
            }
        } else {
            const remainderXs = getArithmeticSeq(remainder, xMultiplier);
            for (let c = 0; c < remainder; c++) {
                results.push([remainderXs[c], ys[r]]);
            }
        }
    }

    return results;
};

interface StationProps {
    style?: 'gzmtr' | 'fmetro';
    lineNum?: string;
    stnNum?: string;
    strokeColour: string;
}

export interface InterchangeStation2024Props extends SVGProps<SVGGElement> {
    stations: StationProps[];
    textClassName?: string;
    columns?: number;
    // Index of station as anchor (from 0)
    anchorAt?: number;
}

const getIconComponent = (style?: 'gzmtr' | 'fmetro') => {
    return style === 'fmetro' ? FMetroStationIcon : StationIcon;
};

export default function InterchangeStation2024({
    stations,
    textClassName,
    columns = 2,
    anchorAt,
    ...others
}: InterchangeStation2024Props) {
    const translates = useMemo(() => getTranslates(stations.length, columns), [stations.length, columns]);

    const [groupX, groupY] = useMemo<Coordinates>(() => {
        if (anchorAt === undefined) {
            return [0, 0];
        } else if (anchorAt < 0 || anchorAt >= translates.length) {
            console.warn(`<InterchangeStation2024/>, anchor index ${anchorAt} is out of bound`);
            return [0, 0];
        } else {
            const [x, y] = translates[anchorAt];
            return [-x, -y];
        }
    }, [translates, anchorAt]);

    return (
        <g transform={`translate(${groupX},${groupY})`} {...others}>
            {stations.map(({ style }, i) => {
                const IconComponent = getIconComponent(style);
                return (
                    <IconComponent
                        key={i}
                        stroke="#aaa"
                        filled
                        strokeWidth={ICON_STROKE_WIDTH * 7}
                        transform={`translate(${translates[i][0]},${translates[i][1]})`}
                    />
                );
            })}
            {stations.map(({ style }, i) => {
                const IconComponent = getIconComponent(style);
                return (
                    <IconComponent
                        key={i}
                        stroke="white"
                        filled
                        strokeWidth={ICON_STROKE_WIDTH * 2.6}
                        transform={`translate(${translates[i][0]},${translates[i][1]})`}
                    />
                );
            })}

            {/* To cover the grey area between stations. */}
            {stations.length && (
                <rect fill="white" x={-12} y={translates[0][1]} width={24} height={-translates[0][1] * 2} />
            )}

            {stations.map(({ style, ...others }, i) => {
                const StationNumberComponent = style === 'fmetro' ? FMetroStationNumber : StationNumber;
                return (
                    <StationNumberComponent
                        key={i}
                        transform={`translate(${translates[i][0]},${translates[i][1]})`}
                        textClassName={textClassName}
                        {...others}
                    />
                );
            })}
        </g>
    );
}
