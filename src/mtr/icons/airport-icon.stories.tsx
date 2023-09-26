import AirportIconComponent from './airport-icon';
import { StoryObj } from '@storybook/react';
import '../../index.css';

export default {
    title: 'MTR/Airport Icon',
    component: AirportIconComponent,
};

type Story = StoryObj<typeof AirportIconComponent>;

export const AirportIcon: Story = {
    args: {
        fill: 'var(--rmg-black)',
    },
};
