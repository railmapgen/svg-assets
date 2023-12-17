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
        zhName: '2号线',
        enName: 'Line 2',
        foregroundColour: MonoColour.white,
        backgroundColour: '#00629B',
        zhClassName: 'rmg-name__zh',
        enClassName: 'rmg-name__en',
        spanDigits: true,
    },
    argTypes: {
        zhName: {
            options: ['2号线', '18号线', 'APM线', '广佛线', '佛山2号线', '海珠有轨1号线'],
            control: { type: 'inline-radio' },
        },
        enName: {
            options: ['Line 2', 'Line 18', 'APM Line', 'Guangfo Line', 'Foshan Line 2', 'THZ1'],
            control: { type: 'inline-radio' },
        },
        foregroundColour: {
            options: [MonoColour.white, MonoColour.black],
            control: { type: 'inline-radio' },
        },
        backgroundColour: {
            control: { type: 'color' },
        },
        spanDigits: {
            options: [true, false],
            control: { type: 'inline-radio' },
        },
    },
};
