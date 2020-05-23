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
                <input type='text' name='title'  className={Styles.input}/>
                <button  className={Styles.btnCancel} onClick={props.onClose}>Cancelar</button> 

                <button  className={Styles.btnCreate} onClick={props.onNew}>Crear</button>
            </div>
            ,
            document.getElementById('modals'))
    )
}

export default NewDiagram;