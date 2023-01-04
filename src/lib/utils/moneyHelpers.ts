
/**
 * Takes all the line items and adds them up
 * it's an array OR undefined
 * @param {Array|undefined} lineItems
 * @returns {number}
 */


/**
 * Takes and returns a dollar amount (USD), formatted with commas and 2 decimals places
 * @param {number} cents
 * @returns {string}
 */
//lineItems: LineItem[] that is a ts type where as lineitems is type of lineitem and it's an array
export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
    if (!lineItems) return 0
    //at the very end; the initial value is 0 see 3:51 mins in lesson 18 for explanation of this reduce 
    return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
}

/**
 * Takes and returns a dollar amount (USD), formatted with commas and 2 decimals places
 * @param {number} cents
 * @returns {string}
 */
export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100;
    // this calls the twoDecimals function from below and passes in the dollars amt from above
    const addDecimals = twoDecimals(dollars);
    return addThousandsSeparator(addDecimals);
}

/**
 * Takes a number and returns the number with 2 decimal places
 * @param {number} myNum
 * @returns {string}
 */
//this takes a number : and returns a string this is not an : OR  
export const twoDecimals = (myNum: number): string => {
    return myNum.toFixed(2)
}

/**
 * Adds a thousands separator
 * @param {string} myNum
 * @returns {string}
 */
export const addThousandsSeparator = (myNum: string): string => {
    // replace is a js thing
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * Takes all the invoices and finds the total
 * this is an Invoice object defined in the global.ts file pretty sure
 * @param {Invoice} invoices
 * @returns {number}
 */
export const sumInvoices = (invoices: Invoice[] | undefined): number => {
    if (!invoices) return 0
    return invoices.reduce((prevValue, curValue) => {
        const invoiceSum = sumLineItems(curValue.lineItems);
        return prevValue + invoiceSum;
    }, 0)
}