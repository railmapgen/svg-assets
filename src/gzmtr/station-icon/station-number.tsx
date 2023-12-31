import StationIcon from './station-icon';
import GenericStationNumber, { GenericStationNumberProps } from './generic-station-number';

type StationNumberProps = Omit<GenericStationNumberProps, 'Icon'>;

export default function StationNumber(props: StationNumberProps) {
    return <GenericStationNumber Icon={StationIcon} {...props} />;
}
