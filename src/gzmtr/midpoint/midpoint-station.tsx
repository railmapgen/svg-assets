import MidpointIcon from './midpoint-icon';
import { forwardRef, SVGProps } from 'react';

type MidpointStationProps = {
    clockwise?: boolean;
    anchorAt?: 'text' | 'circle';
} & SVGProps<SVGGElement>;

export default forwardRef<SVGGElement, MidpointStationProps>(function MidpointStation(
    { clockwise, anchorAt = 'text', ...props },
    ref
) {
    const translateX = anchorAt === 'circle' ? 29 : 0;
    return (
        <g ref={ref} {...props}>
            <g transform={`translate(${translateX},0)`}>
                <MidpointIcon transform={`translate(-30,0)scale(${clockwise ? -1 : 1},1)`} />
                <g textAnchor="middle" fontWeight="bold" fill="red" transform="translate(0,-2.5)">
                    <text className="rmg-name__zh" fontSize={12} style={{ fontWeight: 'bold' }}>
                        半环站
                    </text>
                    <text className="rmg-name__en" y={9} fontSize={4.5} style={{ fontWeight: 'bold' }}>
                        Midpoint Station
                    </text>
                </g>
            </g>
        </g>
    );
});
