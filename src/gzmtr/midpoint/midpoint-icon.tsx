import { SVGProps } from 'react';

const R = 9;
const GAP_ANGEL = (10 * Math.PI) / 180;
const GAP_X = R * Math.sin(GAP_ANGEL);
const GAP_Y = R * Math.cos(GAP_ANGEL);
const d = `M0,${R} A${R},${R} 0 0,0 ${GAP_X},-${GAP_Y}`;

export default function MidpointIcon(props: SVGProps<SVGGElement>) {
    return (
        <g {...props}>
            <circle cx={0} cy={0} r={9} stroke="red" strokeWidth={2} fill="none" />
            <path d={d} stroke="red" strokeWidth={3} fill="none" />
            <path d={d} stroke="white" strokeWidth={1} strokeDasharray="0 1.4 2.3 0" fill="none" />
            <path d="M-1,-9 l3.7,2.4 v-4.8z" fill="red" />
        </g>
    );
}
