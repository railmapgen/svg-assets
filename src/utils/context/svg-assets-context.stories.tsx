import SvgAssetsContextProvider from './svg-assets-context-provider';
import { StationNumber } from '../../gzmtr';
import { StoryObj } from '@storybook/react';
import { useContext, useState } from 'react';
import { SvgAssetsContext } from '../index';

const Demo = () => {
    const { update } = useContext(SvgAssetsContext);

    const [textClassName, setTextClassName] = useState('rmg-name__en');

    return (
        <g>
            <g>
                <StationNumber
                    transform="translate(0,-20)"
                    lineNum="GF"
                    stnNum="22"
                    strokeColour="red"
                    textClassName={textClassName}
                />
                <StationNumber
                    transform="translate(0,20)"
                    lineNum="IJ"
                    stnNum="11"
                    strokeColour="red"
                    textClassName={textClassName}
                />
            </g>

            <g fontSize={10} transform="translate(-80,80)">
                <rect y={-10} height={15} width={150} fill="white" />
                <text onClick={() => setTextClassName('rmg-name__en')}>Sans-serif</text>
                <text x={50} onClick={() => setTextClassName('rmg-name__serif')}>
                    Serif
                </text>
                <text x={80} onClick={() => setTextClassName('rmg-name__mono')}>
                    Mono
                </text>
                <text x={115} onClick={update}>
                    Update size
                </text>
            </g>
        </g>
    );
};

const WrappedDemo = () => {
    return (
        <SvgAssetsContextProvider>
            <Demo />
        </SvgAssetsContextProvider>
    );
};

export default {
    title: 'Utils/SVG Assets Context',
    component: WrappedDemo,
};

type Story = StoryObj<typeof WrappedDemo>;

export const SVGAssetContextDemo: Story = {};
