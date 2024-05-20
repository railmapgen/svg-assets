import InterchangeStation2024Component from './interchange-station-2024';
import '../../index.css';
import { StoryObj } from '@storybook/react';
import StationIcon from './station-icon';

export default {
    title: 'GZMTR/Interchange Station 2024',
    component: InterchangeStation2024Component,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof InterchangeStation2024Component>;

const stn1 = {
    Icon: StationIcon,
    strokeColour: '#00629B',
    lineNum: '2',
    stnNum: '01',
};

const stn2 = {
    Icon: StationIcon,
    strokeColour: '#CD5228',
    lineNum: '22',
    stnNum: '03',
};

const stn3 = {
    Icon: StationIcon,
    strokeColour: '#F5333F',
    lineNum: 'F2',
    stnNum: '27',
};

const stn4 = {
    Icon: StationIcon,
    strokeColour: '#97D700',
    lineNum: '7',
    stnNum: '01',
};

const stationOptions = {
    'GZ South': [stn1, stn2, stn3, stn4],
    Shibi: [stn1, stn4],
};

export const InterchangeStation2024: Story = {
    args: {
        stations: [],
        textClassName: 'rmg-name__en',
    },
    argTypes: {
        stations: {
            options: Object.keys(stationOptions),
            mapping: stationOptions,
            control: {
                type: 'select',
            },
        },
    },
};
