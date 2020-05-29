import React from 'react'
import Styles from './formUnique.module.css'

const FormUnique = (props) =>{
    const message=(props.type==='create')?'Agregar':'guardar';
    const start = React.createRef();
    const amount=React.createRef();
    const label=React.createRef();
    return (
    <div className={Styles.formUnique}>
        <label htmlFor='start' id='labelStart' className={`${Styles.labelStart}`} >
            Periodo
        </label>
        <input type='number' id='start' className={`${Styles.period} ${Styles.start}`} ref={start}/>

        <label htmlFor='uniform' id='labelUniform' className={Styles.labelUniform}>
            Monto 
        </label>
        <input type='number' id='uniform' className={`${Styles.amount} ${Styles.uniform}`} ref={amount}/>
        
        <label htmlFor='label' id='labelLabel'  className={Styles.labelLabel}>
            Etiqueta
        </label>
        <input type='text' id='label' className={`${Styles.label}`} ref={label}/>
        
        <button 
            id='btnAction'
            className={Styles.btnAction} 
            onClick={()=>{
                const amountProperties={
                    type:'unique',
                    start:parseInt(start.current.value,10),
                    amount:parseFloat(amount.current.value),
                    label:label.current.value
                }
                props.onAction(props.id_diagram,amountProperties)
            }}>
                {message}
        </button>
    </div>
)

}

export default  FormUnique;