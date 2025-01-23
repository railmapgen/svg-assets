import { memo, SVGProps } from 'react';
import { ICON_HEIGHT, ICON_STROKE_WIDTH, ICON_STROKE_WIDTH_BOLDER } from '../../gzmtr/constants';

/**
 *     A ----- F
 *   /         |
 * B           |
 * |           |
 * C           |
 *   \         |
 *     D ----- E
 *
 * EF = 18.5
 * AB = (5.01, 5.625)
 * BC = 7.25
 */

const ABdx = 5;
const ABdy = 5.625;
const AF = ICON_HEIGHT - ABdx;
const BC = ICON_HEIGHT - 2 * ABdy;

interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
    bolder?: boolean;
}

export default memo(function StationIcon(props: StationIconProps) {
    const { stroke, filled, bolder, ...others } = props;

    const pathD = `M0,9.25 V-9.25 H-${AF} l-${ABdx},${ABdy} v${BC} l${ABdx},${ABdy} H${AF} l${ABdx},-${ABdy} v-${BC} l-${ABdx},-${ABdy} H0`;

    return (
        <path
            d={pathD}
            fill={filled ? stroke : '#fff'}
            strokeWidth={bolder ? ICON_STROKE_WIDTH_BOLDER : ICON_STROKE_WIDTH}
            stroke={stroke}
            {...others}
        />
    );
});
