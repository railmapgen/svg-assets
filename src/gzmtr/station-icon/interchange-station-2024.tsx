import { ReactNode } from 'react';
import GenericStationNumber, { StationIconProps } from './generic-station-number';
import { ICON_HEIGHT, ICON_STROKE_WIDTH } from '../constants';

type Coordinates = [number, number];

export const getTranslates = (size: number): Coordinates[] => {
    if (size <= 0) {
        return [];
    }
    if (size === 1) {
        return [[0, 0]];
    }
    const rows = Math.ceil(size / 2);
    const ys = Array.from(Array(rows).keys()).map(x => (x - (rows - 1) / 2) * (ICON_HEIGHT + ICON_STROKE_WIDTH));
    const xAbs = ICON_HEIGHT + ICON_STROKE_WIDTH / 2;
    if (size & 1) {
        // odd
        return [[0, ys[0]] as Coordinates].concat(
            ...ys.slice(1).map<Coordinates[]>(y => [
                [-xAbs, y],
                [xAbs, y],
            ])
        );
    } else {
        // even
        return ys
            .map<Coordinates[]>(y => [
                [-xAbs, y],
                [xAbs, y],
            ])
            .flat();
    }
};

interface StationProps {
    Icon: (props: StationIconProps) => ReactNode;
    lineNum?: string;
    stnNum?: string;
    strokeColour: string;
}

interface InterchangeStation2024Props {
    stations: StationProps[];
    textClassName?: string;
}

export default function InterchangeStation2024({ stations, textClassName }: InterchangeStation2024Props) {
    const translates = getTranslates(stations.length);

    return (
        <g>
            {stations.map(({ Icon }, i) => (
                <Icon
                    key={i}
                    stroke="#aaa"
                    padding={4}
                    filled
                    asOutline
                    transform={`translate(${translates[i][0]},${translates[i][1]})`}
                />
            ))}
            {stations.map(({ Icon }, i) => (
                <Icon
                    key={i}
                    stroke="white"
                    padding={1.1}
                    filled
                    asOutline
                    transform={`translate(${translates[i][0]},${translates[i][1]})`}
                />
            ))}

            {/* To cover the grey area between stations. */}
            {stations.length && (
                <rect fill="white" x={-12} y={translates[0][1]} width={24} height={-translates[0][1] * 2} />
            )}

            {stations.map((props, i) => (
                <GenericStationNumber
                    key={i}
                    transform={`translate(${translates[i][0]},${translates[i][1]})`}
                    textClassName={textClassName}
                    {...props}
                />
            ))}
        </g>
    );
}
