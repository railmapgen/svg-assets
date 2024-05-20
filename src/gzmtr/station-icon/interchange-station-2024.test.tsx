import { getTranslates } from './interchange-station-2024';
import { ICON_HEIGHT, ICON_STROKE_WIDTH } from '../constants';

describe('InterchangeStation2024', () => {
    describe('InterchangeStation2024 - translate', () => {
        it.each([
            { size: 0, expected: [] },
            { size: 1, expected: [[0, 0]] },
            {
                size: 2,
                expected: [
                    [-1, 0],
                    [1, 0],
                ],
            },
            {
                size: 3,
                expected: [
                    [0, -0.5],
                    [-1, 0.5],
                    [1, 0.5],
                ],
            },
            {
                size: 4,
                expected: [
                    [-1, -0.5],
                    [1, -0.5],
                    [-1, 0.5],
                    [1, 0.5],
                ],
            },
            {
                size: 5,
                expected: [
                    [0, -1],
                    [-1, 0],
                    [1, 0],
                    [-1, 1],
                    [1, 1],
                ],
            },
        ])('Can calculate translate parameters for size $size', ({ size, expected }) => {
            expect(
                getTranslates(size).map(([x, y]) => [
                    // normalised
                    x / (ICON_HEIGHT + ICON_STROKE_WIDTH / 2),
                    y / (ICON_HEIGHT + ICON_STROKE_WIDTH),
                ])
            ).toEqual(expected);
        });
    });
});
