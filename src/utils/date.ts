// parses date string in the format `dd/mm/yyyy` to a Date object
export const parseDate = (date: string): Date => {
    const parts: string[] = date.split('/');
    const day: number = parseInt(parts[0]);
    const month: number = parseInt(parts[1]);
    const year: number = parseInt(parts[2]);

    return new Date(year, month, day);
};
