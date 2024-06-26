import { SVGProps } from 'react';

export default function AirportIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.3" width={50} height={50} {...props}>
            <g>
                <path
                    fill="#FFFFFF"
                    stroke="#000000"
                    strokeWidth={0.5}
                    strokeMiterlimit={10}
                    d="M14.25,15.06H1.15c-0.5,0-0.9-0.4-0.9-0.9v-13c0-0.5,0.4-0.9,0.9-0.9h13.2c0.5,0,0.9,0.4,0.9,0.9v13C15.25,14.16,15.25,15.06,14.25,15.06z"
                />
                <polyline points="6.55,2.225 6.55,6.125 1.35,9.125 1.35,10.425 6.55,9.125 6.55,12.425 5.04,13.225 5.05,14.095 7.65,13.465 10.35,14.095 10.35,13.225 8.65,12.425 8.65,9.125 14.05,10.425 14.05,9.125 8.65,6.125 8.65,2.225" />
                <circle cx={7.6} cy={2.255} r={1.05} />
            </g>
        </svg>
    );
}
