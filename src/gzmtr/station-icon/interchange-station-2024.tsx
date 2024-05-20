import { ICON_HEIGHT, ICON_STROKE_WIDTH } from '../constants';
import FMetroStationIcon from '../../fmetro/station-icon/station-icon';
import { FlexibleStationIcon } from './station-icon';
import FMetroStationNumber from '../../fmetro/station-icon/station-number';
import StationNumber from './station-number';
import { useMemo } from 'react';

type Coordinates = [number, number];

export const getTranslates = (size: number, preferVertical?: boolean): Coordinates[] => {
    if (size <= 0) {
        return [];
    }
    if (size === 1) {
        return [[0, 0]];
    }

    const xMultiplier = ICON_HEIGHT + ICON_STROKE_WIDTH / 2;
    const yMultiplier = ICON_HEIGHT + ICON_STROKE_WIDTH;

    if (size === 2 && preferVertical) {
        return [
            [0, -0.5 * yMultiplier],
            [0, 0.5 * yMultiplier],
        ];
    }
    const rows = Math.ceil(size / 2);
    const ys = Array.from(Array(rows).keys()).map(x => (x - (rows - 1) / 2) * (ICON_HEIGHT + ICON_STROKE_WIDTH));
    if (size & 1) {
        // odd
        return [[0, ys[0]] as Coordinates].concat(
            ...ys.slice(1).map<Coordinates[]>(y => [
                [-xMultiplier, y],
                [xMultiplier, y],
            ])
        );
    } else {
        // even
        return ys
            .map<Coordinates[]>(y => [
                [-xMultiplier, y],
                [xMultiplier, y],
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

export interface InterchangeStation2024Props {
    stations: StationProps[];
    textClassName?: string;
    // Effective if stations.length === 2
    preferVertical?: boolean;
}

const getIconComponent = (style?: 'gzmtr' | 'fmetro') => {
    return style === 'fmetro' ? FMetroStationIcon : FlexibleStationIcon;
};

export default function InterchangeStation2024({
    stations,
    textClassName,
    preferVertical,
}: InterchangeStation2024Props) {
    const translates = useMemo(() => getTranslates(stations.length, preferVertical), [stations.length, preferVertical]);

    return (
        <g>
            {stations.map(({ style }, i) => {
                const IconComponent = getIconComponent(style);
                return (
                    <IconComponent
                        key={i}
                        stroke="#aaa"
                        padding={4}
                        filled
                        asOutline
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
                        padding={1.1}
                        filled
                        asOutline
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
