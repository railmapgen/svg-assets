import InterchangeStation2024Component, {
    Coordinates,
    InterchangeStation2024Handle,
    InterchangeStation2024Props,
} from './interchange-station-2024';
import '../../index.css';
import { StoryObj } from '@storybook/react-vite';
import { useContext, useEffect, useRef, useState } from 'react';
import SvgAssetsContextProvider from '../../utils/context/svg-assets-context-provider';
import SvgAssetsContext from '../../utils/context/svg-assets-context';

const Demo = (props: InterchangeStation2024Props) => {
    const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
    const [borderBox, setBorderBox] = useState<SVGRect>();

    const { update } = useContext(SvgAssetsContext);
    const ref = useRef<InterchangeStation2024Handle>(null);

    useEffect(() => {
        if (ref.current) {
            setCoordinates(ref.current.getCoordinates());
            setBorderBox(ref.current.getCorrectedBBox());
        }
    }, [ref.current, props.stations, props.columns, props.topHeavy, props.osiPosition]);

    useEffect(() => {
        (window as any).update = update;
        (window as any).ref = ref.current;
    }, [update, ref.current]);

    return (
        <>
            <InterchangeStation2024Component {...props} ref={ref} />
            <g transform="translate(40,40)">
                <rect height={60} width={60} fill="white" />
                <text fontSize={10}>
                    {coordinates.map((coord, i) => (
                        <tspan x={0} dy={10} key={i}>
                            ({coord.join(', ')})
                        </tspan>
                    ))}
                </text>
            </g>
            {borderBox && (
                <rect
                    x={borderBox.x}
                    y={borderBox.y}
                    width={borderBox.width}
                    height={borderBox.height}
                    className="shining-border"
                />
            )}
        </>
    );
};

const WrappedDemo = (props: InterchangeStation2024Props) => {
    return (
        <SvgAssetsContextProvider>
            <Demo {...props} />
        </SvgAssetsContextProvider>
    );
};

export default {
    title: 'GZMTR/Interchange Station 2024',
    component: WrappedDemo,
};

type Story = StoryObj<typeof InterchangeStation2024Component>;

const line2 = '#00629B';
const line3 = '#ECA154';
const line7 = '#97D700';
const line8 = '#008C95';
const line11 = '#ffb00a';
const line18 = '#0047BA';
const line22 = '#CD5228';
const gfLine = '#C4D600';
const fsLine2 = '#F5333F';
const tnh1 = '#5EB3E4';

const GZSouth: InterchangeStation2024Props['stations'] = [
    {
        strokeColour: line2,
        lineNum: '2',
        stnNum: '01',
    },
    {
        strokeColour: line22,
        lineNum: '22',
        stnNum: '03',
    },
    {
        style: 'fmetro',
        strokeColour: fsLine2,
        lineNum: 'F2',
        stnNum: '27',
    },
    {
        strokeColour: line7,
        lineNum: '7',
        stnNum: '01',
    },
];

const stationOptions: Record<string, InterchangeStation2024Props['stations']> = {
    'GZ South': GZSouth,
    Yangang: [
        {
            strokeColour: line11,
            lineNum: '11',
            stnNum: '25',
        },
        {
            strokeColour: gfLine,
            lineNum: 'GF',
            stnNum: '22',
        },
    ],
    Linyuexi: [
        {
            style: 'fmetro',
            strokeColour: fsLine2,
            lineNum: 'F2',
            stnNum: '25',
        },
        {
            style: 'fmetro',
            strokeColour: tnh1,
            lineNum: 'TNH1',
            stnNum: '14',
        },
    ],
    'Panyu Square': [
        {
            strokeColour: line3,
            lineNum: '3',
            stnNum: '01',
        },
        {
            strokeColour: line22,
            lineNum: '22',
            stnNum: '01',
        },
        {
            strokeColour: line18,
            lineNum: '18',
            stnNum: '03',
        },
    ],
    Pazhou: [
        {
            strokeColour: line8,
            lineNum: '8',
            stnNum: '27',
        },
        {
            strokeColour: line11,
            lineNum: '11',
            stnNum: '02',
        },
    ],
};

export const InterchangeStation2024: Story = {
    args: {
        stations: [],
        classNames: { digits: 'rmg-name__en' },
    },
    argTypes: {
        stations: {
            options: Object.keys(stationOptions),
            mapping: stationOptions,
            control: {
                type: 'select',
            },
        },
        columns: {
            control: { type: 'range', min: 1, max: 5, step: 1 },
        },
        topHeavy: {
            options: [true, false],
            control: { type: 'radio' },
        },
        anchorAt: {
            control: { type: 'range', min: -1, max: 3, step: 1 },
        },
        osiPosition: {
            options: ['left', 'right'],
            control: { type: 'radio' },
        },
    },
};
