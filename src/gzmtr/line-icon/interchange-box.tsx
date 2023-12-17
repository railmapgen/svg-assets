import { SVGProps } from 'react';
import { DEFAULT_BOX_WIDTH } from './utils';

interface InterchangeBoxProps extends SVGProps<SVGRectElement> {
    customWidth?: number;
}

export default function InterchangeBox(props: InterchangeBoxProps) {
    const { customWidth, ...others } = props;

    const extra = (customWidth ?? DEFAULT_BOX_WIDTH) - DEFAULT_BOX_WIDTH;

    return (
        <rect
            x={-22.5 - extra / 2}
            height={24}
            width={customWidth ?? DEFAULT_BOX_WIDTH}
            rx={4.5}
            {...others}
            data-testid="intBox"
        />
    );
}
