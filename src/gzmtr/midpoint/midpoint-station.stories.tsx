import MidpointStationComponent from './midpoint-station';
import { StoryObj } from '@storybook/react';

export default {
    title: 'GZMTR/Midpoint Station',
    component: MidpointStationComponent,
};

type Story = StoryObj<typeof MidpointStationComponent>;

export const MidpointStation: Story = {
    argTypes: {
        clockwise: {
            options: [true, false],
            control: { type: 'radio' },
        },
        anchorAt: {
            options: ['text', 'circle'],
            control: { type: 'radio' },
        },
    },
};
