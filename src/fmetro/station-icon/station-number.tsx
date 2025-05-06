import StationIcon from './station-icon';
import GenericStationNumber, { GenericStationNumberProps } from '../../gzmtr/station-icon/generic-station-number';
import { forwardRef } from 'react';

type StationNumberProps = Omit<GenericStationNumberProps, 'Icon'>;

export default forwardRef<SVGGElement, StationNumberProps>(function StationNumber(props, ref) {
    return <GenericStationNumber Icon={StationIcon} {...props} ref={ref} />;
});
