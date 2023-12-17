export const DEFAULT_BOX_WIDTH = 45;
export const MAX_TEXT_WIDTH = DEFAULT_BOX_WIDTH - 3;

export const getCommonStarts = (zhName: string, enName: string) => {
    const matches = [zhName, enName].map(text => text.match(/^(\w+).+$/));
    if (matches[0] && matches[1] && matches[0][1] === matches[1][1]) {
        return matches[0][1];
    }
};

export const getLeadingDigits = (zhName: string) => {
    const matches = zhName.match(/^(\d+)\D+$/);
    return matches?.[1];
};
