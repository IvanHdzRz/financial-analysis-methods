import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './newDiagram.module.css'

const NewDiagram = (props)=>{
    if(props.visible===false){
        return null
    }
    return(
        
        ReactDOM.createPortal(
            <div className={Styles.modal}>
                <h2 className={Styles.title}>Nuevo Diagrama</h2>
                <label htmlFor='title'  className={Styles.label}>Titulo</label>
                <input type='text' name='title'  className={Styles.input} id='txtTitle'/>
                <button  className={Styles.btnCancel} onClick={props.onClose}>
                    Cancelar
                </button> 
                <button  
                    className={Styles.btnCreate}
                    onClick={()=>{
                        //se llama a la funcion crear nuevo diagrama y se pasa como parametro el valor del titulo
                        props.onNew(document.getElementById('txtTitle').value)
                        //se cierra el modal
                        props.onClose();
                    }}>
                        Crear
                </button>
            </div>
            ,
            document.getElementById('modals'))
    )
}

export default NewDiagram;