import React from 'react'
import Modal from '../Modal'
import Styles from './modalCreateDiagram.module.css'

const ModalCreateDiagram=(props)=>{
   const txtTitulo= React.createRef();
    const txtInterest=React.createRef();
    if (props.visible===false){
        return null
    }
    return(
        
        <Modal visible={true}>
            <div className={Styles.formNewDiagram}>
                <h2 className={Styles.title}>Nuevo Diagrama</h2>
                <label htmlFor='txtTitle'  className={Styles.label}>Titulo</label>
                <input type='text' name='title'  className={Styles.input} id='txtTitle' autoFocus ref={txtTitulo}/>
                <label htmlFor='txtInterest'  className={Styles.labelI}>Interes:</label>
                <input type='text' name='interest'  className={Styles.inputI} id='txtInterest'  ref={txtInterest}/>
                 <button  className={Styles.btnCancel} onClick={props.onClose}>
                     Cancelar
                </button> 
                <button  
                     className={Styles.btnCreate}
                    onClick={()=>{
                    //se llama a la funcion crear nuevo diagrama y se pasa como parametro el valor del titulo
                        props.onNew(txtTitulo.current.value,txtInterest.current.value);
                                //se cierra el modal
                        props.onClose();
                    }}>
                    Crear
                </button>
            </div>
        </Modal>
    )
}

export default ModalCreateDiagram