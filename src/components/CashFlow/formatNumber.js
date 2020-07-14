const formatNumber=(number)=>{
    let postFix='';
    let abrevNumber
    let isPositive=number>=0?true:false;
    number=Math.abs(number)
    if(number<1000){
      abrevNumber=number
    }
    if(number>999&&number<10000){
      abrevNumber=(number/1000).toFixed(2)
      postFix='k'
    }
    if(number>=10000&&number<100000){
      abrevNumber=(number/1000).toFixed(1)
      postFix='k'
    }
    if(number>=100000&&number<1000000){
      abrevNumber=(number/1000).toFixed(0)
      postFix='k'
    }
    if(number>=1000000){
      abrevNumber= (number/1000000).toFixed(2)
      postFix='M'
    }
    return `${isPositive?'':'-'}${abrevNumber}${postFix}`
  }

export default formatNumber