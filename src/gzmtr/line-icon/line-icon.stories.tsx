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
        spanDigits: true,
    },
    argTypes: {
        lineName: {
            options: ['gz2', 'gz18', 'apm', 'gf', 'fs2', 'thz1'],
            mapping: {
                gz2: ['2号线', 'Line 2'],
                gz18: ['18号线', 'Line 18'],
                apm: ['APM线', 'APM Line'],
                gf: ['广佛线', 'Guangfo Line'],
                fs2: ['佛山2号线', 'Foshan Line 2'],
                thz1: ['海珠有轨1号线', 'THZ1'],
            },
            control: { type: 'radio' },
        },
        foregroundColour: {
            options: [MonoColour.white, MonoColour.black],
            control: { type: 'radio' },
        },
        backgroundColour: {
            control: { type: 'color' },
        },
        spanDigits: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
};
