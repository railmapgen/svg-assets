import DisneyIconComponent from './disney-icon';
import { StoryObj } from '@storybook/react';
import '../index.css';

export default {
    title: 'MTR/Disney Icon',
    component: DisneyIconComponent,
};

type Story = StoryObj<typeof DisneyIconComponent>;

export const DisneyIcon: Story = {
    args: {
        fill: 'var(--rmg-black)',
    },
};
