import StationNumberComponent from './station-number';
import '../../index.css';
import { StoryObj } from '@storybook/react';

export default {
    title: 'GZMTR/Station Number',
    component: StationNumberComponent,
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
