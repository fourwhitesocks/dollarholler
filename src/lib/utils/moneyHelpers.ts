//lineItems: LineItem[] that is a ts type where as lineitems is type of lineitem and it's an array
export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
    if (!lineItems) return 0
    //at the very end; the initial value is 0 see 3:51 mins in lesson 18 for explanation of this reduce 
    return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
}

export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100;
    // this calls the twoDecimals function from below and passes in the dollars amt from above
    const addDecimals = twoDecimals(dollars);
    return addThousandsSeparator(addDecimals);
}

//this takes a number : and returns a string this is not an : OR  
export const twoDecimals = (myNum: number): string => {
    return myNum.toFixed(2)
}

export const addThousandsSeparator = (myNum: string): string => {
    // replace is a js thing
    return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}