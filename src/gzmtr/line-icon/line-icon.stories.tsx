import LineIconComponent from './line-icon';
import { StoryObj } from '@storybook/react';
import { MonoColour } from '@railmapgen/rmg-palette-resources';

export default {
    title: 'GZMTR/Line Icon',
    component: LineIconComponent,
};

type Story = StoryObj<typeof LineIconComponent>;

export const LineIcon: Story = {
    args: {
        lineName: ['2号线', 'Line 2'],
        foregroundColour: MonoColour.white,
        backgroundColour: '#00629B',
        zhClassName: 'rmg-name__zh',
        enClassName: 'rmg-name__en',
    },
    argTypes: {
        lineName: {
            options: [
                ['2号线', 'Line 2'],
                ['18号线', 'Line 18'],
                ['APM线', 'APM Line'],
                ['广佛线', 'Guangfo Line'],
                ['佛山2号线', 'Foshan Line 2'],
            ],
            control: { type: 'radio' },
        },
        foregroundColour: {
            options: [MonoColour.white, MonoColour.black],
            control: { type: 'radio' },
        },
        backgroundColour: {
            control: { type: 'color' },
        },
    },
};
