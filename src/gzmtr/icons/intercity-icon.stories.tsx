import IntercityIconComponent from './intercity-icon';
import { StoryObj } from '@storybook/react-vite';
import '../../index.css';

export default {
    title: 'GZMTR/Intercity Icon',
    component: IntercityIconComponent,
};

type Story = StoryObj<typeof IntercityIconComponent>;

export const IntercityIcon: Story = {
    args: {},
};
