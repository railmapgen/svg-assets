import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH, ICON_STROKE_WIDTH } from '../constants';
import FMetroStationIcon from '../../fmetro/station-icon/station-icon';
import StationIcon from './station-icon';
import FMetroStationNumber from '../../fmetro/station-icon/station-number';
import StationNumber from './station-number';
import { SVGProps, useMemo } from 'react';

type Coordinates = [number, number];

export const getTranslates = (size: number, preferVertical?: boolean): Coordinates[] => {
    if (size <= 0) {
        return [];
    }
    if (size === 1) {
        return [[0, 0]];
    }

    const xMultiplier = ICON_FULL_WIDTH;
    const yMultiplier = ICON_FULL_HEIGHT;

    if (size === 2 && preferVertical) {
        return [
            [0, -0.5 * yMultiplier],
            [0, 0.5 * yMultiplier],
        ];
    }
    const rows = Math.ceil(size / 2);
    const ys = Array.from(Array(rows).keys()).map(x => (x - (rows - 1) / 2) * yMultiplier);
    if (size & 1) {
        // odd
        return [[0, ys[0]] as Coordinates].concat(
            ...ys.slice(1).map<Coordinates[]>(y => [
                [-0.5 * xMultiplier, y],
                [0.5 * xMultiplier, y],
            ])
        );
    } else {
        // even
        return ys
            .map<Coordinates[]>(y => [
                [-0.5 * xMultiplier, y],
                [0.5 * xMultiplier, y],
            ])
            .flat();
    }
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
    // Effective if stations.length === 2
    preferVertical?: boolean;
    // Index of station as anchor (from 0)
    anchorAt?: number;
}

const getIconComponent = (style?: 'gzmtr' | 'fmetro') => {
    return style === 'fmetro' ? FMetroStationIcon : StationIcon;
};

export default function InterchangeStation2024({
    stations,
    textClassName,
    preferVertical,
    anchorAt,
    ...others
}: InterchangeStation2024Props) {
    const translates = useMemo(() => getTranslates(stations.length, preferVertical), [stations.length, preferVertical]);

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
