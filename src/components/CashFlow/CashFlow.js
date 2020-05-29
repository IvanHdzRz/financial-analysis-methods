import React from 'react'
import Styles from './cashFlow.module.css'
const CashFlow =(props)=>{
    
    if(props.amounts.size===0){
        return (<div className={Styles.messageEmpty}><p>woops no hay montos aun, agrega algunos para empezar :D</p></div>)
    }
    
    return (
        <div  className={Styles.CashFlow} >
            {/*fix obtener el tamaño del div padre para dimensionar al elemento svg*/}
            {props.last}
                
        </div>
        
    )
}

export default CashFlow;