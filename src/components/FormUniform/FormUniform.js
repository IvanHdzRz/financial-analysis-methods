import React from 'react'
import Styles from './formUniform.module.css'

const FormUniform = (props) =>{
    const message=(props.type==='create')?'Agregar':'guardar';
    const start = React.createRef();
    const end = React.createRef();
    const amount=React.createRef();
    const label=React.createRef();
    const createAmount=(e)=>{
        const amountProperties={
            type:'uniform',
            start:parseInt(start.current.value),
            end:parseInt(end.current.value),
            amount:parseFloat(amount.current.value),
            label:label.current.value
        }
        props.onAction(props.id_diagram,amountProperties)
        start.current.value='';
        end.current.value='';
        amount.current.value='';
        label.current.value='';
        e.preventDefault();
    }
    return (
    <div className={Styles.formUniform}>
        <form onSubmit={createAmount}>
        <span>Periodos:</span>
        <label htmlFor='start' id='labelStart' className={`${Styles.labelStart}`} >
            Inicio
        </label>
        <input type='number' id='start' className={`${Styles.period} ${Styles.start}`} ref={start} required min={0}/>
        
        <label htmlFor='end' id='labelEnd' className={`${Styles.labelEnd}`}>
            Fin
        </label>
        <input type='number' id='end' className={`${Styles.period} ${Styles.end}`} ref={end} required min={0}/>
        
        <label htmlFor='uniform' id='labelUniform' className={Styles.labelUniform}>
            Monto uniforme
        </label>
        <input type='number' id='uniform' className={`${Styles.amount} ${Styles.uniform}`} ref={amount} required step='any'/>
        
        <label htmlFor='label' id='labelLabel'  className={Styles.labelLabel}>
            Etiqueta
        </label>
        <input type='text' id='label' className={`${Styles.label}`} ref={label}/>
        
        <input
            type='submit' 
            id='btnAction'
            value={message}
            className={Styles.btnAction} 
         />
                
        
        </form>
    </div>
)

}

export default  FormUniform;