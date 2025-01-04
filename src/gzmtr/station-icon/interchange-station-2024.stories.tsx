import InterchangeStation2024Component, { InterchangeStation2024Props } from './interchange-station-2024';
import '../../index.css';
import { StoryObj } from '@storybook/react';

export default {
    title: 'GZMTR/Interchange Station 2024',
    component: InterchangeStation2024Component,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof InterchangeStation2024Component>;

const line2 = '#00629B';
const line3 = '#ECA154';
const line7 = '#97D700';
const line18 = '#0047BA';
const line22 = '#CD5228';
const fsLine2 = '#F5333F';
const tnh1 = '#5EB3E4';

const stationOptions: Record<string, InterchangeStation2024Props['stations']> = {
    'GZ South': [
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
    ],
    'Hanxi Changlong': [
        {
            strokeColour: line3,
            lineNum: '3',
            stnNum: '03',
        },
        {
            strokeColour: line7,
            lineNum: '7',
            stnNum: '05',
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
    Shibi: [
        {
            strokeColour: line2,
            lineNum: '2',
            stnNum: '02',
        },
        {
            strokeColour: line7,
            lineNum: '7',
            stnNum: '02',
        },
    ],
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
        columns: {
            control: { type: 'range', min: 1, max: 5, step: 1 },
        },
        anchorAt: {
            control: { type: 'range', min: -1, max: 3, step: 1 },
        },
    },
};
