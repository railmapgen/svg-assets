import { forwardRef, memo, SVGProps } from 'react';
import LineIconSpan from './line-icon-span';
import { ColourHex, MonoColour } from '@railmapgen/rmg-palette-resources';
import LineIconNumber from './line-icon-number';
import LineIconLong from './line-icon-long';
import LineIconText from './line-icon-text';
import { getCommonStarts, getLeadingDigits } from './utils';

type TextElementSelector = 'digits' | 'zh' | 'en';
type LineIconSelector = 'wrapper' | TextElementSelector;

export interface LineIconProps extends SVGProps<SVGGElement> {
    zhName: string;
    enName: string;
    foregroundColour: MonoColour;
    backgroundColour: ColourHex;
    passed?: boolean;
    spanDigits?: boolean;
    classNames?: Partial<Record<LineIconSelector, SVGProps<SVGGElement>['className']>>;
    textProps?: Partial<Record<TextElementSelector, Omit<SVGProps<SVGTextElement>, 'className'>>>;
}

export default memo(
    forwardRef<SVGGElement, LineIconProps>(function LineIcon(props, ref) {
        const { zhName, enName, spanDigits } = props;

        const type = getType(zhName, enName);

        switch (type) {
            case 1:
                return spanDigits ? <LineIconSpan ref={ref} {...props} /> : <LineIconNumber ref={ref} {...props} />;
            case 2:
                return <LineIconSpan ref={ref} {...props} />;
            default:
                return zhName.length >= 5 ? (
                    <LineIconLong ref={ref} {...props} />
                ) : (
                    <LineIconText ref={ref} {...props} />
                );
        }
    })
);

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
