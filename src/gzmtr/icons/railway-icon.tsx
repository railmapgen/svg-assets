import { SVGProps } from 'react';

const style1: SVGProps<SVGLineElement> = {
    fill: 'none',
    stroke: '#000000',
    strokeMiterlimit: 10,
};

export default function RailwayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.3" width={50} height={50} {...props}>
            <g>
                <path
                    fill="#FFFFFF"
                    stroke="#000000"
                    strokeWidth={0.5}
                    strokeMiterlimit={10}
                    d="M14.36,15.06H1.16c-0.5,0-0.9-0.4-0.9-0.9v-13c0-0.5,0.4-0.9,0.9-0.9h13.2c0.5,0,0.9,0.4,0.9,0.9v13C15.26,14.66,14.86,15.06,14.36,15.06z"
                />
                <g>
                    <rect x={6.58} y={1.07} width={2.36} height={1.33} />
                    <polygon points="7.2,8.25 7.2,12.38 3.91,12.87 3.91,13.79 11.71,13.79 11.71,12.87 8.32,12.38 8.32,8.25" />
                    <path d="M9.3,8.6H6.22c-0.25,0-0.44-0.2-0.44-0.44V6.71c0-0.25,0.2-0.44,0.44-0.44H9.3c0.25,0,0.44,0.2,0.44,0.44v1.44C9.75,8.4,9.55,8.6,9.3,8.6z" />
                </g>
                <path {...style1} d="M2.31,7.53c0-3.01,2.44-5.45,5.45-5.45s5.45,2.44,5.45,5.45" />
                <path {...style1} d="M4.55,11.93c0,0-2.24-1.55-2.24-4.4" />
                <path {...style1} d="M10.97,11.93c0,0,2.24-1.42,2.24-4.4" />
            </g>
        </svg>
    );
}
