import { Fragment, PropsWithChildren } from 'react';

const WIDTH = 200;
const PADDED_WIDTH = 220;
const START = PADDED_WIDTH / 2;
const POINTS = [-100, -75, -50, -25, 0, 25, 50, 75, 100];

export default function SvgWrapper(props: PropsWithChildren) {
    const { children } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox={`-${START} -${START} ${PADDED_WIDTH} ${PADDED_WIDTH}`}
            height={PADDED_WIDTH}
        >
            <g fontSize={10}>
                {POINTS.map(x => (
                    <Fragment key={x}>
                        <path
                            stroke={x ? 'gray' : 'black'}
                            strokeWidth={1}
                            strokeDasharray={x ? 2 : undefined}
                            d={`M-${START},${x}h${PADDED_WIDTH}`}
                        />
                        <text x={START} y={x} fill="black" textAnchor="end" dominantBaseline="central">
                            {x}
                        </text>
                        <path
                            stroke={x ? 'gray' : 'black'}
                            strokeWidth={1}
                            strokeDasharray={x ? 2 : undefined}
                            d={`M${x},-${START}v${PADDED_WIDTH}`}
                        />
                        <text x={x} y={START} fill="black" textAnchor="middle">
                            {x}
                        </text>
                    </Fragment>
                ))}
            </g>

            {children}
        </svg>
    );
}
