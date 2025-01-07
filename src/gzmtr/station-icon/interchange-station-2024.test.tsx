import InterchangeStation2024, { getTranslates, InterchangeStation2024Handle } from './interchange-station-2024';
import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH } from '../constants';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { createRef } from 'react';

const mockGetBBox = vi.fn();
(SVGElement.prototype as any).getBBox = mockGetBBox;

describe('InterchangeStation2024', () => {
    describe('InterchangeStation2024 - translate', () => {
        const normaliser = ([x, y]: [number, number]): [number, number] => [x / ICON_FULL_WIDTH, y / ICON_FULL_HEIGHT];

        it.each([
            { size: 0, columns: 1, expected: [] },
            { size: 1, columns: 1, expected: [[0, 0]] },
            { size: 1, columns: 10, expected: [[0, 0]] },
            {
                size: 2,
                columns: 1,
                expected: [
                    [0, -0.5],
                    [0, 0.5],
                ],
            },
            {
                size: 2,
                columns: 2,
                expected: [
                    [-0.5, 0],
                    [0.5, 0],
                ],
            },
            {
                size: 2,
                columns: 10,
                expected: [
                    [-0.5, 0],
                    [0.5, 0],
                ],
            },
            {
                size: 3,
                columns: 1,
                expected: [
                    [0, -1],
                    [0, 0],
                    [0, 1],
                ],
            },
            {
                size: 3,
                columns: 2,
                expected: [
                    [0, -0.5],
                    [-0.5, 0.5],
                    [0.5, 0.5],
                ],
            },
            {
                size: 3,
                columns: 2,
                topHeavy: true,
                expected: [
                    [-0.5, -0.5],
                    [0.5, -0.5],
                    [0, 0.5],
                ],
            },
            {
                size: 4,
                columns: 2,
                expected: [
                    [-0.5, -0.5],
                    [0.5, -0.5],
                    [-0.5, 0.5],
                    [0.5, 0.5],
                ],
            },
            {
                size: 5,
                columns: 2,
                expected: [
                    [0, -1],
                    [-0.5, 0],
                    [0.5, 0],
                    [-0.5, 1],
                    [0.5, 1],
                ],
            },
            {
                size: 5,
                columns: 2,
                topHeavy: true,
                expected: [
                    [-0.5, -1],
                    [0.5, -1],
                    [-0.5, 0],
                    [0.5, 0],
                    [0, 1],
                ],
            },
            {
                size: 5,
                columns: 3,
                expected: [
                    [-0.5, -0.5],
                    [0.5, -0.5],
                    [-1, 0.5],
                    [0, 0.5],
                    [1, 0.5],
                ],
            },
            {
                size: 5,
                columns: 10,
                expected: [
                    [-2, 0],
                    [-1, 0],
                    [0, 0],
                    [1, 0],
                    [2, 0],
                ],
            },
        ])(
            'Can calculate translate parameters for size $size, columns $columns, topHeavy = $topHeavy',
            ({ size, columns, topHeavy, expected }) => {
                expect(getTranslates(size, columns, topHeavy).map(normaliser)).toEqual(expected);
            }
        );
    });

    describe('InterchangeStation2024 - handle', () => {
        it('Can forward ref and get imperative handle', () => {
            mockGetBBox.mockReturnValue({ width: 14 });

            const ref = createRef<InterchangeStation2024Handle>();
            render(
                <svg>
                    <InterchangeStation2024
                        ref={ref}
                        stations={[
                            {
                                strokeColour: '#008C95',
                                lineNum: '8',
                                stnNum: '27',
                            },
                            {
                                strokeColour: '#ffb00a',
                                lineNum: '11',
                                stnNum: '02',
                            },
                        ]}
                    />
                </svg>
            );

            expect(ref.current?.getCoordinates()).toHaveLength(2);
            expect(ref.current?.target?.querySelectorAll('path').length).toBeGreaterThan(0);
        });
    });
});
