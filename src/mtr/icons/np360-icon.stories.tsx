import Np360Icon from './np360-icon';
import { StoryObj } from '@storybook/react';
import '../../index.css';

export default {
    title: 'MTR/Ngong Ping 360 Icon',
    component: Np360Icon,
};

type Story = StoryObj<typeof Np360Icon>;

export const NgongPing360Icon: Story = {
    args: {
        fill: 'var(--rmg-black)',
    },
};
