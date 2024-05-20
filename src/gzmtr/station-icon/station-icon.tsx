import { memo, SVGProps } from 'react';
import { ICON_HEIGHT, ICON_STROKE_WIDTH } from '../constants';

interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
    asOutline?: boolean;
    padding?: number;
}

export default memo(function StationIcon(props: StationIconProps) {
    const { stroke, filled, asOutline, padding = 0, ...others } = props;

    // const pathD = 'M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0';

    const halfHeight = ICON_HEIGHT / 2 + padding;
    const mid = asOutline ? `M0,-${halfHeight}` : `M0,${halfHeight} V-${halfHeight}`;
    const pathD = `${mid} H-${ICON_HEIGHT / 2} a${halfHeight},${halfHeight} 0 0,0 0,${halfHeight * 2} h${ICON_HEIGHT} a${halfHeight},${halfHeight} 0 0,0 0,-${halfHeight * 2} H0`;

    return (
        <path d={pathD} fill={filled ? stroke : '#fff'} strokeWidth={ICON_STROKE_WIDTH} stroke={stroke} {...others} />
    );
});
