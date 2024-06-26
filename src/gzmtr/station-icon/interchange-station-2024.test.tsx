import { getTranslates } from './interchange-station-2024';
import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH } from '../constants';

describe('InterchangeStation2024', () => {
    describe('InterchangeStation2024 - translate', () => {
        const normaliser = ([x, y]: [number, number]): [number, number] => [x / ICON_FULL_WIDTH, y / ICON_FULL_HEIGHT];

        it.each([
            { size: 0, expected: [] },
            { size: 1, expected: [[0, 0]] },
            {
                size: 2,
                expected: [
                    [-0.5, 0],
                    [0.5, 0],
                ],
            },
            {
                size: 3,
                expected: [
                    [0, -0.5],
                    [-0.5, 0.5],
                    [0.5, 0.5],
                ],
            },
            {
                size: 4,
                expected: [
                    [-0.5, -0.5],
                    [0.5, -0.5],
                    [-0.5, 0.5],
                    [0.5, 0.5],
                ],
            },
            {
                size: 5,
                expected: [
                    [0, -1],
                    [-0.5, 0],
                    [0.5, 0],
                    [-0.5, 1],
                    [0.5, 1],
                ],
            },
        ])('Can calculate translate parameters for size $size', ({ size, expected }) => {
            expect(getTranslates(size).map(normaliser)).toEqual(expected);
        });

        it('Can calculate translate parameters for vertically stacked stations', () => {
            expect(getTranslates(2, true).map(normaliser)).toEqual([
                [0, -0.5],
                [0, 0.5],
            ]);
        });
    });
});
