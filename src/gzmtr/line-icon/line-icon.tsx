import { memo } from 'react';
import LineIconSpan from './line-icon-span';
import { ColourHex, MonoColour } from '@railmapgen/rmg-palette-resources';
import LineIconNumber from './line-icon-number';
import LineIconLong from './line-icon-long';
import LineIconText from './line-icon-text';
import { getCommonStarts, getLeadingDigits, Name } from './utils';

export interface LineIconProps {
    lineName: Name;
    foregroundColour: MonoColour;
    backgroundColour: ColourHex;
    zhClassName?: string;
    enClassName?: string;
    passed?: boolean;
    spanDigits?: boolean;
}

export default memo(
    function LineIcon(props: LineIconProps) {
        const { lineName, spanDigits } = props;

        const type = getType(lineName);

        switch (type) {
            case 1:
                return spanDigits ? <LineIconSpan {...props} /> : <LineIconNumber {...props} />;
            case 2:
                return <LineIconSpan {...props} />;
            default:
                return lineName[0].length >= 5 ? <LineIconLong {...props} /> : <LineIconText {...props} />;
        }
    },
    (prevProps, nextProps) =>
        prevProps.lineName.toString() === nextProps.lineName.toString() &&
        prevProps.foregroundColour === nextProps.foregroundColour &&
        prevProps.backgroundColour === nextProps.backgroundColour &&
        prevProps.zhClassName === nextProps.zhClassName &&
        prevProps.enClassName === nextProps.enClassName &&
        prevProps.passed === nextProps.passed &&
        prevProps.spanDigits === nextProps.spanDigits
);

/**
 * type 1: 2号线
 * type 2: APM线
 * type 3: 佛山2号线
 */
const getType = (name: Name): number => {
    const leadingDigits = getLeadingDigits(name);
    if (leadingDigits !== undefined) return 1;

    const commonStarts = getCommonStarts(name);
    if (commonStarts !== undefined) {
        return 2;
    }

    return 3;
};
