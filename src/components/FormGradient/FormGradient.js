import React from 'react'
import Styles from './formGradient.module.css'

const FormGradient = (props) =>{
    const message=(props.type==='create')?'Agregar':'guardar';
    const start = React.createRef();
    const end = React.createRef();
    const amount=React.createRef();
    const g=React.createRef();
    const label=React.createRef();
    return (
    <div className={Styles.formGradient}>
        <span>Periodos:</span>
        <label htmlFor='start' id='labelStart' className={`${Styles.labelStart}`} >
            Inicio
        </label>
        <input type='number' id='start' className={`${Styles.period} ${Styles.start}`} ref={start}/>
        
        <label htmlFor='end' id='labelEnd' className={`${Styles.labelEnd}`}>
            Fin
        </label>
        <input type='number' id='end' className={`${Styles.period} ${Styles.end}`} ref={end}/>
        
        <label htmlFor='uniform' id='labelUniform' className={Styles.labelUniform}>
            Monto uniforme
        </label>
        <input type='number' id='uniform' className={`${Styles.amount} ${Styles.uniform}`} ref={amount}/>
        
        <label htmlFor='gradiente'  id='labelGradient' className={Styles.labelGradient}>
            Gradiente
        </label>
        <input type='number' id='gradient' className={`${Styles.amount} ${Styles.gradient}`} ref={g}/>
        
        <label htmlFor='label' id='labelLabel'  className={Styles.labelLabel}>
            Etiqueta
        </label>
        <input type='text' id='label' className={`${Styles.label}`} ref={label}/>
        
        <button 
            id='btnAction'
            className={Styles.btnAction} 
            onClick={()=>{
                const amountProperties={
                    type:'gradient',
                    start:parseInt(start.current.value),
                    end:parseInt(end.current.value),
                    amount:parseFloat(amount.current.value),
                    g:parseFloat(g.current.value),
                    label:label.current.value
                }
                props.onAction(props.id_diagram,amountProperties)
            }}>
                {message}
        </button>
    </div>
)

}

export default  FormGradient;