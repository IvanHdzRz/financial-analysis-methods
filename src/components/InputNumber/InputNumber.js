import React from 'react'
import Styles from './inputNumber.module.css';
const InputNumber =(props)=>{
    const {type,id,errorMessage,valid,externClass}=props
    const step= type==='float'?'0.1':'1';
    const showError= valid===false?Styles.errorLabel:Styles.none;
    const inputError= valid===false?Styles.inputError:'';
    const width={width:`${errorMessage.toString().length*8}px`}
    return (
        <div className={`${Styles.inputNumber} `}>
            <input id={id} 
                type='number' 
                step={step} 
                required 
                className={`${inputError} ${externClass.map(style=> style).join(' ')}`}
                
                />
            <label htmlFor={id} style={width} className={showError}>{errorMessage}</label> 
            {console.log(width)}
        </div>
    )

}

export default InputNumber;
