import type { Preview } from '@storybook/react-vite';
import SvgWrapper from './svg-wrapper';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        Story => (
            <SvgWrapper>
                <Story />
            </SvgWrapper>
        ),
    ],
};

export default preview;
