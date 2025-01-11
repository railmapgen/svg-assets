import StationNumberComponent from './station-number';
import '../../index.css';
import { StoryObj } from '@storybook/react';
import { GenericStationNumberProps } from './generic-station-number';
import { useContext, useEffect } from 'react';
import GZMTRContext from '../context/gzmtr-context';
import GZMTRContextProvider from '../context/gzmtr-context-provider';

const Demo = (props: GenericStationNumberProps) => {
    const { update } = useContext(GZMTRContext);

    useEffect(() => {
        (window as any).update = update;
    }, [update]);

    return (
        <>
            <StationNumberComponent {...props} />
            <g transform="translate(-100,60)">
                <rect height={30} width={200} fill="white" />
                <text fontSize={8}>
                    <tspan x={0} dy={8}>
                        1. Change textClassName to update font.
                    </tspan>
                    <tspan x={0} dy={8}>
                        2. Use window.update() in console to force update sizing.
                    </tspan>
                </text>
            </g>
        </>
    );
};

const WrappedDemo = (props: GenericStationNumberProps) => {
    return (
        <GZMTRContextProvider>
            <Demo {...props} />
        </GZMTRContextProvider>
    );
};

export default {
    title: 'GZMTR/Station Number',
    component: WrappedDemo,
};

type Story = StoryObj<typeof StationNumberComponent>;

export const StationNumber: Story = {
    args: {
        lineNum: '2',
        stnNum: '01',
        strokeColour: '#00629B',
        size: 'md',
        textClassName: 'rmg-name__en',
    },
    argTypes: {
        strokeColour: {
            control: { type: 'color' },
        },
        passed: {
            options: [true, false],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    },
};
