export const toFirstCapital = (value: string | null) => {
    if (typeof value !== 'string') return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
};