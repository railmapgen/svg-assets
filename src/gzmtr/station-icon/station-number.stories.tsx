import StationNumberComponent from './station-number';
import '../../index.css';
import { StoryObj } from '@storybook/react';
import { GenericStationNumberProps } from './generic-station-number';

export default {
    title: 'GZMTR/Station Number',
    component: StationNumberComponent,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof StationNumberComponent>;

const CLASSNAMES_OPTIONS: Record<string, GenericStationNumberProps['classNames']> = {
    typical: {
        digits: 'rmg-name__en',
    },
    empty: {},
};

const TEXT_PROPS_OPTIONS: Record<string, GenericStationNumberProps['textProps']> = {
    empty: {},
    nerd: {
        fontFamily: 'Comic Sans MS',
        fontStyle: 'italic',
    },
};

export const StationNumber: Story = {
    args: {
        lineNum: '2',
        stnNum: '01',
        strokeColour: '#00629B',
        size: 'md',
        classNames: CLASSNAMES_OPTIONS.typical,
        textProps: TEXT_PROPS_OPTIONS.empty,
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
        bolderBorder: {
            options: [true, false],
            control: { type: 'radio' },
        },
        alwaysShowColouredBorder: {
            options: [true, false],
            control: { type: 'radio' },
        },
        useSameScale: {
            options: [true, false],
            control: { type: 'radio' },
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
