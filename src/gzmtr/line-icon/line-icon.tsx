import { memo } from 'react';
import LineIconSpan from './line-icon-span';
import { ColourHex, MonoColour } from '@railmapgen/rmg-palette-resources';
import LineIconNumber from './line-icon-number';
import LineIconLong from './line-icon-long';
import LineIconText from './line-icon-text';
import { getCommonStarts, getLeadingDigits } from './utils';

export interface LineIconProps {
    zhName: string;
    enName: string;
    foregroundColour: MonoColour;
    backgroundColour: ColourHex;
    zhClassName?: string;
    enClassName?: string;
    passed?: boolean;
    spanDigits?: boolean;
}

export default memo(function LineIcon(props: LineIconProps) {
    const { zhName, enName, spanDigits } = props;

    const type = getType(zhName, enName);

    switch (type) {
        case 1:
            return spanDigits ? <LineIconSpan {...props} /> : <LineIconNumber {...props} />;
        case 2:
            return <LineIconSpan {...props} />;
        default:
            return zhName.length >= 5 ? <LineIconLong {...props} /> : <LineIconText {...props} />;
    }
});

/**
 * type 1: 2号线
 * type 2: APM线
 * type 3: 佛山2号线
 */
const getType = (zhName: string, enName: string): number => {
    const leadingDigits = getLeadingDigits(zhName);
    if (leadingDigits !== undefined) return 1;

    const commonStarts = getCommonStarts(zhName, enName);
    if (commonStarts !== undefined) {
        return 2;
    }

    return 3;
};
