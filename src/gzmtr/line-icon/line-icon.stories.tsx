import LineIconComponent, { LineIconProps } from './line-icon';
import { StoryObj } from '@storybook/react-vite';
import { MonoColour } from '@railmapgen/rmg-palette-resources';

export default {
    title: 'GZMTR/Line Icon',
    component: LineIconComponent,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof LineIconComponent>;

const CLASSNAMES_OPTIONS: Record<string, LineIconProps['classNames']> = {
    typical: {
        digits: 'rmg-name__en',
        zh: 'rmg-name__zh',
        en: 'rmg-name__en',
    },
    empty: {},
};

const TEXT_PROPS_OPTIONS: Record<string, LineIconProps['textProps']> = {
    empty: {},
    nerd: {
        digits: {
            fontFamily: 'monospace',
            fontWeight: 'bold',
        },
        zh: {
            fontFamily: 'Kaiti SC',
            fontWeight: 700,
        },
        en: {
            fontFamily: 'Times New Roman',
            fontStyle: 'italic',
        },
    },
};

export const LineIcon: Story = {
    args: {
        zhName: '2号线',
        enName: 'Line 2',
        foregroundColour: MonoColour.white,
        backgroundColour: '#00629B',
        spanDigits: true,
        classNames: CLASSNAMES_OPTIONS.typical,
        textProps: TEXT_PROPS_OPTIONS.empty,
    },
    argTypes: {
        zhName: {
            options: ['2号线', '18号线', '12345号线', 'APM线', '广佛线', '佛山2号线', '海珠有轨1号线'],
            control: { type: 'inline-radio' },
        },
        enName: {
            options: ['Line 2', 'Line 18', 'Line 12345', 'APM Line', 'Guangfo Line', 'Foshan Line 2', 'THZ1'],
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
        classNames: {
            options: Object.keys(CLASSNAMES_OPTIONS),
            mapping: CLASSNAMES_OPTIONS,
            control: { type: 'radio' },
        },
        textProps: {
            options: Object.keys(TEXT_PROPS_OPTIONS),
            mapping: TEXT_PROPS_OPTIONS,
            control: { type: 'radio' },
        },
    },
};
