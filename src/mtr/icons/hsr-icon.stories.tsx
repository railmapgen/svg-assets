import HsrIconComponent from './hsr-icon';
import { StoryObj } from '@storybook/react-vite';
import '../../index.css';

export default {
    title: 'MTR/HSR Icon',
    component: HsrIconComponent,
};

type Story = StoryObj<typeof HsrIconComponent>;

export const HSRIcon: Story = {
    args: {
        fill: 'var(--rmg-black)',
    },
};
