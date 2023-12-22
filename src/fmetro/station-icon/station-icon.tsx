import { memo } from 'react';

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
const BC = 18.5 - 2 * ABdy;

interface StationIconProps {
    stroke: string;
    filled?: boolean;
}

export default memo(function StationIcon(props: StationIconProps) {
    const { stroke, filled } = props;

    const pathD = `M0,9.25 V-9.25 H-${18.5 - ABdx} l-${ABdx},${ABdy} v${BC} l${ABdx},${ABdy} H${
        18.5 - ABdx
    } l${ABdx},-${ABdy} v-${BC} l-${ABdx},-${ABdy} H0`;

    return <path d={pathD} fill={filled ? stroke : '#fff'} strokeWidth={1.3} stroke={stroke} />;
});
