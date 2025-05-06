import StationNumber from './station-number';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import SvgAssetsContextProvider from '../../utils/context/svg-assets-context-provider';
import { useContext } from 'react';
import SvgAssetsContext from '../../utils/context/svg-assets-context';
import { TEXT_MAX_WIDTH } from './generic-station-number';

const getScaleFromTransform = (transformAttr?: string | null) => {
    return transformAttr?.match(/scale\(([\d.]+)\)/)?.[1];
};

const mockGetBBox = vi.fn();
(SVGElement.prototype as any).getBBox = mockGetBBox;

describe('GZMTR - StationNumber', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('#5 Can apply same scale to both line and stn numbers when both have char length 2', async () => {
        mockGetBBox.mockReturnValueOnce({ width: 20 }); // mock line num bbox
        mockGetBBox.mockReturnValueOnce({ width: 14 }); // mock stn num bbox
        render(
            <svg>
                <StationNumber lineNum="GF" stnNum="11" strokeColour="red" useSameScale />
            </svg>
        );

        const lineNumScale = getScaleFromTransform(screen.getByText('GF').closest('g')?.getAttribute('transform'));
        expect(lineNumScale).toBe((TEXT_MAX_WIDTH / 20).toString());

        const stnNumScale = getScaleFromTransform(screen.getByText('11').closest('g')?.getAttribute('transform'));
        expect(stnNumScale).toBe((TEXT_MAX_WIDTH / 20).toString()); // will apply line num scale
    });

    it('#7 Can apply different scale to line and stn numbers if station number has length greater than 2', async () => {
        mockGetBBox.mockReturnValueOnce({ width: 20 }); // mock line num bbox
        mockGetBBox.mockReturnValueOnce({ width: 35 }); // mock stn num bbox
        render(
            <svg>
                <StationNumber lineNum="GF" stnNum="11-23" strokeColour="red" useSameScale />
            </svg>
        );

        const lineNumScale = getScaleFromTransform(screen.getByText('GF').closest('g')?.getAttribute('transform'));
        expect(lineNumScale).toBe((TEXT_MAX_WIDTH / 20).toString());

        const stnNumScale = getScaleFromTransform(screen.getByText('11-23').closest('g')?.getAttribute('transform'));
        expect(stnNumScale).toBe((TEXT_MAX_WIDTH / 35).toString()); // will apply station num scale
    });

    it('Can apply different scales as expected', async () => {
        mockGetBBox.mockReturnValueOnce({ width: 10 }); // mock line num bbox
        mockGetBBox.mockReturnValueOnce({ width: 20 }); // mock stn num bbox
        render(
            <svg>
                <StationNumber lineNum="7" stnNum="01-6" strokeColour="red" />
            </svg>
        );

        const lineNumScale = getScaleFromTransform(screen.getByText('7').closest('g')?.getAttribute('transform'));
        expect(lineNumScale).toBe('1'); // will not be scaled

        const stnNumScale = getScaleFromTransform(screen.getByText('01-6').closest('g')?.getAttribute('transform'));
        expect(stnNumScale).toBe((TEXT_MAX_WIDTH / 20).toString());
    });

    it('Can force update station number sizing', async () => {
        mockGetBBox.mockReturnValue({ width: 10 });

        const TestComponent = () => {
            const { update } = useContext(SvgAssetsContext);
            return (
                <div>
                    <button onClick={update}>Update</button>
                    <svg>
                        <StationNumber lineNum="7" stnNum="01-6" strokeColour="red" />
                    </svg>
                </div>
            );
        };

        render(<TestComponent />, { wrapper: SvgAssetsContextProvider });
        expect(mockGetBBox).toBeCalledTimes(2);

        // force update
        fireEvent.click(screen.getByRole('button'));
        expect(mockGetBBox).toBeCalledTimes(4);
    });
});
