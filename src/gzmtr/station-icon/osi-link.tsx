import { ICON_FULL_WIDTH, ICON_STROKE_WIDTH, Position } from '../constants';
import { SVGProps } from 'react';

type OSILinkProps = {
    position: Position;
} & SVGProps<SVGCircleElement>;

export default function OSILink({ position, ...others }: OSILinkProps) {
    const rotate = position === 'right' ? 'rotate(180)' : 'rotate(0)';

    return (
        <circle
            cx={-ICON_FULL_WIDTH * 0.4}
            cy={0}
            r={ICON_FULL_WIDTH / 4}
            stroke="#aaa"
            strokeWidth={ICON_STROKE_WIDTH * 1.75}
            fill="white"
            strokeDasharray="2.7 2.5"
            transform={rotate}
            {...others}
        />
    );
}
