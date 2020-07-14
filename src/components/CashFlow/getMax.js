const getMaxValues=(fneTable)=>{
    let max=0;
    let min=0;
    fneTable.forEach(amount => {
        max=(amount>max)?amount:max;
        min=(amount<min)?amount:min;
    });

    return {positive:max, negative:min,total:max+Math.abs(min)}
}

export default getMaxValues;