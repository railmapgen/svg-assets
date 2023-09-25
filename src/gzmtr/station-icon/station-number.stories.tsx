import StationNumber from './station-number';
import '../index.css';
import { StoryObj } from '@storybook/react';

export default {
    title: 'GZMTR/Station Number',
    component: StationNumber,
};

type Story = StoryObj<typeof StationNumber>;

export const Basic: Story = {
    args: {
        lineNum: '2',
        stnNum: '01',
        strokeColour: '#00629B',
    },
    argTypes: {
        strokeColour: {
            control: { type: 'color' },
        },
        passed: {
            options: [true, false],
            control: { type: 'radio' },
        },
        large: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
};
