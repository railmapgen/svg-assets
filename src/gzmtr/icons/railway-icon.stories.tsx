import RailwayIconComponent from './railway-icon';
import { StoryObj } from '@storybook/react-vite';
import '../../index.css';

export default {
    title: 'GZMTR/Railway Icon',
    component: RailwayIconComponent,
};

type Story = StoryObj<typeof RailwayIconComponent>;

export const RailwayIcon: Story = {
    args: {},
};
