import React from 'react'
import Styles from './formUnique.module.css'

const FormUnique = (props) =>{
    const message=(props.type==='create')?'Agregar':'guardar';
    const start = React.createRef();
    const amount=React.createRef();
    const label=React.createRef();
    const createAmount=(e)=>{
        const amountProperties={
            type:'unique',
            start:parseInt(start.current.value,10),
            amount:parseFloat(amount.current.value),
            label:label.current.value
        }
        props.onAction(props.id_diagram,amountProperties)
        start.current.value='';
        amount.current.value='';
        label.current.value='';
        e.preventDefault();
}
    return (
    <div className={Styles.formUnique}>
        <form onSubmit={createAmount}>
        <label htmlFor='start' id='labelStart' className={`${Styles.labelStart}`} >
            Periodo
        </label>
        <input type='number' id='start' className={`${Styles.period} ${Styles.start}`} ref={start} required min={0}/>

        <label htmlFor='uniform' id='labelUniform' className={Styles.labelUniform}>
            Monto 
        </label>
        <input type='number' id='uniform' className={`${Styles.amount} ${Styles.uniform}`} ref={amount} required step='any'/>
        
        <label htmlFor='label' id='labelLabel'  className={Styles.labelLabel}>
            Etiqueta
        </label>
        <input type='text' id='label' className={`${Styles.label}`} ref={label}/>
        
        <input 
            type='submit'
            id='btnAction'
            className={Styles.btnAction} 
            value={message}
            />
                
        
        </form>
    </div>
)

}

export default  FormUnique;