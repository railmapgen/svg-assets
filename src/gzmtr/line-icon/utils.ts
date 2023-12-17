export type Name = [string, string];

export const DEFAULT_BOX_WIDTH = 45;
export const MAX_TEXT_WIDTH = DEFAULT_BOX_WIDTH - 3;

export const getCommonStarts = (name: Name) => {
    const matches = name.map(text => text.match(/^(\w+).+$/));
    if (matches[0] && matches[1] && matches[0][1] === matches[1][1]) {
        return matches[0][1];
    }
};

export const getLeadingDigits = (name: Name) => {
    const matches = name[0].match(/^(\d+)\D+$/);
    return matches?.[1];
};
