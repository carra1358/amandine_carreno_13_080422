 

 const getBalance = (index,array,initialValue) => {
    
    const smallArray = array.slice(0,index)
    const amountToremove = smallArray.reduce((a,b) => a+b, array[0])
    const newBlance = initialValue-amountToremove
    return newBlance
}

export default getBalance;