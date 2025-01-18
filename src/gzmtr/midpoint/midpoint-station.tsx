import MidpointIcon from './midpoint-icon';
import { SVGProps } from 'react';

type MidpointStationProps = {
    clockwise?: boolean;
};

export default function MidpointStation({ clockwise, ...props }: MidpointStationProps & SVGProps<SVGGElement>) {
    return (
        <g {...props}>
            <MidpointIcon transform={`translate(-29,0)scale(${clockwise ? -1 : 1},1)`} />
            <g textAnchor="middle" fontWeight="bold" fill="red" transform="translate(0,2)">
                <text className="rmg-name__zh" y={-0.5} fontSize={11.5} fontWeight="bold">
                    半环站
                </text>
                <text className="rmg-name__en" y={5.5} fontSize={4.5}>
                    Midpoint Station
                </text>
            </g>
        </g>
    );
}
