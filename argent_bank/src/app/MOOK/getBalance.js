
/**
 * function that calculate the account balance of a array of payments
 * @param {*} index of the element of the array we want to get the new balance
 * @param {array} array containing all the transactions(here only negatives)
 * @param {number} initialValue initial value of the account
 * @return {number} new balance available
 */
const getBalance = (index, array, initialValue) => {

    const smallArray = array.slice(0, index)
    const amountToremove = smallArray.reduce((a, b) => a + b, array[0])
    const newBlance = initialValue - amountToremove
    return newBlance
}

export default getBalance;