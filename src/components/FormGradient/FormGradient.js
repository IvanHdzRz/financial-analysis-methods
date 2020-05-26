import React from 'react'
import Styles from './formGradient.module.css'

const FormGradient = () =>{
return (
    <div className={Styles.formGradient}>
        <span>Periodos:</span>
        <label htmlFor='start' id='labelStart' className={`${Styles.labelStart}`} >
            Inicio
        </label>
        <input type='number' id='start' className={`${Styles.period} ${Styles.start}`}/>
        
        <label htmlFor='end' id='labelEnd' className={`${Styles.labelEnd}`}>
            Fin
        </label>
        <input type='number' id='end' className={`${Styles.period} ${Styles.end}`}/>
        
        <label htmlFor='uniform' id='labelUniform' className={Styles.labelUniform}>
            Monto uniforme
        </label>
        <input type='number' id='uniform' className={`${Styles.amount} ${Styles.uniform}`}/>
        
        <label htmlFor='gradiente'  id='labelGradient' className={Styles.labelGradient}>
            Gradiente
        </label>
        <input type='number' id='gradient' className={`${Styles.amount} ${Styles.gradient}`}/>
        
        <label htmlFor='label' id='labelLabel'  className={Styles.labelLabel}>
            Etiqueta
        </label>
        <input type='text' id='label' className={`${Styles.label}`}/>
        
        <button id='btnAction' className={Styles.btnAction}>Agregar</button>
    </div>
)

}

export default  FormGradient;