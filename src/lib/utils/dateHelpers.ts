import { isBefore } from 'date-fns';

/**
 * This takes yyyy-mm-dd and returns m-d-yyyy
 * @param {string} myDate
 * @returns {string} m-d-yyyy
 */
//takes a string and returns a string
export const convertDate = (myDate: string): string => {
    // break apart the date
    const [year, month, date] = splitDate(myDate);
    // return it in the correct format
    //parse int converts a string to an actual number, and numbers don't have leading zeros
    return `${parseInt(month)} /  ${parseInt(date)} / ${year}`
}

/**
 * Determines whether a date is before today (meaning it's late!)
 * taking myDAte which is a string qnd return a boolean
 * @param {string} myDate
 * @returns {boolean}
 */
//so if it's late it's true; and if it's false it's not
export const isLate = (myDate: string): boolean => {
    const [year, month, date] = splitDate(myDate);
    const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date));
    const today = new Date();
    //return the isBefore function and compare duedate to today; ie: is our
    //due date before today
    return isBefore(dueDate, today);
}

/**
 * Takes a date yyyy-mm-dd and splits it into an array
 * myDate is a string and it returns an array and formatted as such
 * @param {string} myDate
 * @returns {Array} [yyyy, mm, dd]
 */
export const splitDate = (myDate: string): Array<string> => {
    return myDate.split('-')
}
