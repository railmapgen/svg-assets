import { SVGProps } from 'react';

const style1: SVGProps<SVGLineElement> = {
    fill: 'none',
    stroke: '#000000',
    strokeMiterlimit: 10,
};

const style2: SVGProps<SVGLineElement> = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 0.6,
    strokeMiterlimit: 10,
};

export default function IntercityIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.3" width={50} height={50} {...props}>
            <path
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth={0.5}
                strokeMiterlimit={10}
                d="M14.26,15.06H1.16c-0.5,0-0.9-0.4-0.9-0.9v-13c0-0.5,0.4-0.9,0.9-0.9h13.2c0.5,0,0.9,0.4,0.9,0.9v13C15.26,14.16,15.26,15.06,14.26,15.06z"
            />
            <line {...style1} x1={1.06} y1={10.66} x2={14.36} y2={10.66} />
            <line {...style2} x1={12.56} y1={4.16} x2={12.56} y2={7.86} />
            <line {...style2} x1={9.76} y1={4.16} x2={9.76} y2={7.86} />
            <line {...style2} x1={6.86} y1={4.16} x2={6.86} y2={7.86} />
            <line {...style1} x1={2.16} y1={7.86} x2={14.36} y2={7.86} />
            <path {...style2} d="M14.36,4.16H5.16c0,0-0.4165277,0-0.94,0.2c-1.8,0.8-1.76,3-1.76,3" />
            <line {...style1} x1={2.86} y1={9.26} x2={14.36} y2={9.26} />
            <path d="M2.86,9.76c-0.1,0-0.2-0.0452423-0.2-0.0452423c-0.5-0.2-0.5-0.9547577-0.5-0.9547577h0.7V9.76z" />
        </svg>
    );
}
