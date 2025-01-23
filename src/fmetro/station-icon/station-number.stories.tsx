import StationNumberComponent from './station-number';
import '../../index.css';
import { StoryObj } from '@storybook/react';

export default {
    title: 'FMetro/Station Number',
    component: StationNumberComponent,
};

type Story = StoryObj<typeof StationNumberComponent>;

export const StationNumber: Story = {
    args: {
        lineNum: 'F2',
        stnNum: '20',
        strokeColour: '#F5333F',
        size: 'md',
        textClassName: 'rmg-name__zh',
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
