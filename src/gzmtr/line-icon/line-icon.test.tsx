import LineIcon from './line-icon';
import { render, screen } from '@testing-library/react';
import { MonoColour } from '@railmapgen/rmg-palette-resources';
import { expect, vi } from 'vitest';
import { createRef } from 'react';

const mockGetBBox = vi.fn();
(SVGElement.prototype as any).getBBox = mockGetBBox;

describe('GZMTR - LineIcon', () => {
    beforeEach(() => {
        mockGetBBox.mockReturnValue({ width: 0 });
    });

    it('Can render line icon for passed station as expected', () => {
        const { container } = render(
            <svg>
                <LineIcon
                    zhName="18号线"
                    enName="Line 18"
                    foregroundColour={MonoColour.black}
                    backgroundColour="#000000"
                    passed
                />
            </svg>
        );

        const gEl = container.querySelector('g');
        expect(gEl).toBeInTheDocument();
        expect(gEl?.getAttribute('fill')).toBe(MonoColour.white);

        const rectEl = container.querySelector('rect');
        expect(rectEl).toBeInTheDocument();
        expect(rectEl?.getAttribute('fill')).toBe('#aaa');
    });

    it('Can render type 1 line icon as expected', () => {
        render(
            <svg>
                <LineIcon
                    zhName="18号线"
                    enName="Line 18"
                    foregroundColour={MonoColour.white}
                    backgroundColour="#000000"
                />
            </svg>
        );

        // text is separated in 3 elements
        expect(screen.getByText('18').tagName).toBe('tspan');
        expect(screen.getByText('号线').tagName).toBe('tspan');
        expect(screen.getByText('Line 18').tagName).toBe('text');
    });

    it('Can render type 1 line icon with digits spanning as expected', () => {
        render(
            <svg>
                <LineIcon
                    zhName="18号线"
                    enName="Line 18"
                    foregroundColour={MonoColour.white}
                    backgroundColour="#000000"
                    spanDigits={true}
                />
            </svg>
        );

        // remaining part
        expect(screen.getByText('号线').tagName).toBe('tspan');
        expect(screen.getByText('Line 18').tagName).toBe('tspan');

        // digits part
        expect(screen.getByText('18').tagName).toBe('text');
    });

    it('Can render type 2 line icon as expected', () => {
        render(
            <svg>
                <LineIcon
                    zhName="APM线"
                    enName="APM Line"
                    foregroundColour={MonoColour.white}
                    backgroundColour="#000000"
                />
            </svg>
        );

        // remaining part
        expect(screen.getByText('线').tagName).toBe('tspan');
        expect(screen.getByText('Line').tagName).toBe('tspan');

        // common part
        expect(screen.getByText('APM').tagName).toBe('text');
    });

    it('Can render type 3 line icon as expected', () => {
        render(
            <svg>
                <LineIcon
                    zhName="佛山2号线"
                    enName="Foshan Line 2"
                    foregroundColour={MonoColour.white}
                    backgroundColour="#000000"
                />
            </svg>
        );

        expect(screen.getByText('佛山2号线').tagName).toBe('text');
        expect(screen.getByText('Foshan Line 2').tagName).toBe('text');
    });

    it('Can render type 3 line icon with extra long name as expected', () => {
        mockGetBBox.mockReturnValue({ width: 50 });

        render(
            <svg>
                <LineIcon
                    zhName="海珠有轨1号线"
                    enName="THZ1"
                    foregroundColour={MonoColour.white}
                    backgroundColour="#000000"
                />
            </svg>
        );

        expect(screen.getByTestId('intBox')).toHaveAttribute('width', '54');
    });

    it('Can forward ref to internal g element', () => {
        const ref = createRef<SVGGElement>();
        render(
            <svg>
                <LineIcon
                    ref={ref}
                    zhName="18号线"
                    enName="Line 18"
                    foregroundColour={MonoColour.black}
                    backgroundColour="#000000"
                />
            </svg>
        );
        expect(ref.current?.tagName).toBe('g');
    });
});
