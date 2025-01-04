import { getTranslates } from './interchange-station-2024';
import { ICON_FULL_HEIGHT, ICON_FULL_WIDTH } from '../constants';

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
});
