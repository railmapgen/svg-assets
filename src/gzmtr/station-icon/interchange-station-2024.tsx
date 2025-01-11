import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH, ICON_STROKE_WIDTH, Position } from '../constants';
import FMetroStationIcon from '../../fmetro/station-icon/station-icon';
import StationIcon from './station-icon';
import FMetroStationNumber from '../../fmetro/station-icon/station-number';
import StationNumber from './station-number';
import { forwardRef, SVGProps, useImperativeHandle, useMemo, useRef } from 'react';
import OSILink from './osi-link';

export type Coordinates = [number, number];

// An arithmetic sequence where elements are located symmetrically around zero.
const getArithmeticSeq = (size: number, multiplier: number) => {
    return Array.from(Array(size).keys()).map(x => (x - (size - 1) / 2) * multiplier);
};

export const getTranslates = (size: number, columns: number, topHeavy?: boolean): Coordinates[] => {
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
        const shortRowIndex = topHeavy ? rows - 1 : 0;
        if (remainder === 0 || r !== shortRowIndex) {
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

export type InterchangeStation2024Handle = {
    target: SVGGElement | null;
    getCoordinates: () => Coordinates[];
    getTranslate: () => Coordinates;
};

export interface InterchangeStation2024Props extends SVGProps<SVGGElement> {
    stations: StationProps[];
    textClassName?: string;
    columns?: number;
    // Default is pyramid. If bottomHeavy === true, it's reverse pyramid style.
    topHeavy?: boolean;
    // Index of station as anchor (from 0)
    anchorAt?: number;
    // isOSI only takes effect if stations.length === 2 and columns === 1
    osiPosition?: Position;
}

const getIconComponent = (style?: 'gzmtr' | 'fmetro') => {
    return style === 'fmetro' ? FMetroStationIcon : StationIcon;
};

const InterchangeStation2024 = forwardRef<InterchangeStation2024Handle, InterchangeStation2024Props>(
    function InterchangeStation2024(
        { stations, textClassName, columns = 2, topHeavy, anchorAt, osiPosition, ...others },
        ref
    ) {
        const translates = useMemo(
            () => getTranslates(stations.length, columns, topHeavy),
            [stations.length, columns, topHeavy]
        );

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

        const gEl = useRef<SVGGElement>(null);

        useImperativeHandle(
            ref,
            () => ({
                getCoordinates: () => translates,
                getTranslate: () => [groupX, groupY],
                target: gEl.current,
            }),
            [translates, gEl.current]
        );

        const showOSILink = stations.length === 2 && columns === 1 && !!osiPosition;
        return (
            <g ref={gEl} transform={`translate(${groupX},${groupY})`} {...others}>
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
                {showOSILink && (
                    <OSILink
                        position={osiPosition}
                        r={ICON_FULL_WIDTH / 2.9}
                        strokeWidth={ICON_STROKE_WIDTH * 2.2}
                        strokeDasharray={undefined}
                    />
                )}

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

                {showOSILink && <OSILink position={osiPosition} />}

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
);

export default InterchangeStation2024;
