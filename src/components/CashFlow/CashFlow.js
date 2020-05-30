import React from 'react'
import Styles from './cashFlow.module.css'
const CashFlow =(props)=>{
    
    if(props.FneTable.size===0){
        return (<div className={Styles.messageEmpty}><p>woops no hay montos aun, agrega algunos para empezar :D</p></div>)
    }
    const height=185;
    const width=350;
    const getMaxValues=()=>{
        let max=0;
        let min=0;
        props.FneTable.forEach(amount => {
            max=(amount>max)?amount:max;
            min=(amount<min)?amount:min;
        });

        return {positive:max, negative:min,total:max+Math.abs(min)}
    }
    const maximos=getMaxValues();

    const drawLines=()=>{
        const lines=[];
        let x1
        let y1
        let x2
        let y2
        let spacing=(props.FneTable.size>1)?width/props.FneTable.size-1:0;
        let color;
        props.FneTable.forEach((amount,period )=> {
            x1=(period===0)?3:spacing*period+3;
            y1=(maximos.positive*height)/maximos.total;
            x2=x1;
            y2=y1-((amount*height)/maximos.total)-3;
            color=(amount>0)?Styles.positive:Styles.negative;
            console.log(x1,y1,x2,y2)
            lines.push(
                <line 
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth={3}
                    strokeLinecap={"round"}  
                    className={`${Styles.line} ${color}` }
                    key={period}
                />) 
        }); 
        return lines;
    }
    
    
    return (
        <div  className={Styles.CashFlow} >
            <svg height={height} width={width}>
                {drawLines()}
            </svg>                
        </div>
        
    )
}

export default CashFlow;