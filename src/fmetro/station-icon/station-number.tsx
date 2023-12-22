import StationIcon from './station-icon';
import GenericStationNumber, { GenericStationNumberProps } from '../../gzmtr/station-icon/generic-station-number';

type StationNumberProps = Omit<GenericStationNumberProps, 'Icon'>;

export default function StationNumber(props: StationNumberProps) {
    return <GenericStationNumber Icon={StationIcon} {...props} />;
}
