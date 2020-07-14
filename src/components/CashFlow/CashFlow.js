import React from 'react'
import Styles from './cashFlow.module.css'
import getMax from './getMax'
const CashFlow =(props)=>{
    
    if(props.FneTable.size===0){
        return (<div className={Styles.messageEmpty}><p>woops no hay montos aun, agrega algunos para empezar :D</p></div>)
    }
    /*medidas en pixeles */
    const height=185;
    const width=350;
    const fontSize=11;
    const padding=10;
    const lineStroke=3;
    const avaibleHeight=height-2*padding-3*fontSize+2*lineStroke;
    const avaibleWidth=width-2*padding;
    /*fin de configuracion de lienzo*/

    const maximos=getMax(props.FneTable);
    const ratioPixelsPerCantOfMoney=avaibleHeight/(maximos.positive+Math.abs(maximos.negative))
    const originOfPositiveAmount=(maximos.positive*ratioPixelsPerCantOfMoney)+padding+fontSize-lineStroke
    const originOfNegativeAmount=originOfPositiveAmount+fontSize+2*lineStroke;
    const cantOfPeriods=props.FneTable.size;
    console.log(cantOfPeriods)
    const drawLines=()=>{
        const lines=[];
        let x1
        let y1
        let x2
        let y2
        let color;
        props.FneTable.forEach((amount,period )=> {
            x1=cantOfPeriods>1?((avaibleWidth/(cantOfPeriods-1))*period)+padding:padding;
            y1=amount>=0?originOfPositiveAmount:originOfNegativeAmount;
            x2=x1;
            y2=amount>=0?originOfPositiveAmount-amount*ratioPixelsPerCantOfMoney:
                        originOfNegativeAmount+Math.abs(amount)*ratioPixelsPerCantOfMoney;

            color=(amount>0)?Styles.positive:Styles.negative;
            
            lines.push(
                <g key={period}>
                    <text 
                        className='cantidad'
                        x={x1-fontSize} 
                        y={amount>0?y2-lineStroke:y2+fontSize}  
                        fontSize={fontSize}
                        fill={'white'}
                        >
                        
                        {amount!==0?amount:''}
                    </text>
                    <text 
                        className='period'
                        x={x1} 
                        y={originOfPositiveAmount+fontSize}  
                        fontSize={fontSize}
                        fill={'white'}
                        >
                        
                        {period}
                    </text>
                    <line 
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        strokeWidth={lineStroke}
                        strokeLinecap={"round"}  
                        className={`${Styles.line} ${color}` }
                        key={period}
                    />
                </g>
                ) 
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