import { memo } from 'react';

interface StationIconProps {
    stroke: string;
    filled?: boolean;
}

export default memo(function StationIcon(props: StationIconProps) {
    const { stroke, filled } = props;

    const pathD = 'M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0';

    return <path d={pathD} fill={filled ? stroke : '#fff'} strokeWidth={1.3} stroke={stroke} />;
});
