import { memo, SVGProps } from 'react';
import { ICON_STROKE_WIDTH } from '../constants';

interface StationIconProps extends SVGProps<SVGPathElement> {
    stroke: string;
    filled?: boolean;
}

export default memo(function StationIcon(props: StationIconProps) {
    const { stroke, filled, ...others } = props;

    const pathD = 'M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0';
    return (
        <path d={pathD} fill={filled ? stroke : '#fff'} strokeWidth={ICON_STROKE_WIDTH} stroke={stroke} {...others} />
    );
});
