import React from 'react'
import Styles from './cashFlow.module.css'
const CashFlow =(props)=>{
    
    if(props.FneTable.size===0){
        return (<div className={Styles.messageEmpty}><p>woops no hay montos aun, agrega algunos para empezar :D</p></div>)
    }
    
    return (
        <div  className={Styles.CashFlow} >
           {console.log(props.FneTable)}
                
        </div>
        
    )
}

export default CashFlow;