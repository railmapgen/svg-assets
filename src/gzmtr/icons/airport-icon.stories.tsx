import AirportIconComponent from './airport-icon';
import { StoryObj } from '@storybook/react-vite';
import '../../index.css';

export default {
    title: 'GZMTR/Airport Icon',
    component: AirportIconComponent,
};

type Story = StoryObj<typeof AirportIconComponent>;

export const AirportIcon: Story = {
    args: {},
};
