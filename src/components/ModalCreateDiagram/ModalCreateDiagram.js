import React from 'react'
import Modal from '../Modal'
import Styles from './modalCreateDiagram.module.css'

const ModalCreateDiagram=(props)=>{
   const txtTitulo= React.createRef();
    const txtInterest=React.createRef();
    const createDiagram=(e)=>{
        props.onNew(txtTitulo.current.value,txtInterest.current.value);
        props.onClose();
        e.preventDefault();
    }
    if (props.visible===false){
        return null
    }
    return(
        
        <Modal visible={true}>
            <div className={Styles.formNewDiagram}>
                <form onSubmit={createDiagram}>
                <h2 className={Styles.title}>Nuevo Diagrama</h2>
                <label htmlFor='txtTitle'  className={Styles.label}>Titulo</label>
                <input type='text' name='title'  className={Styles.input} id='txtTitle' autoFocus ref={txtTitulo} required autoComplete={false}/>
                <label htmlFor='txtInterest'  className={Styles.labelI}>% Interes:</label>
                <input type='number' name='interest'  className={Styles.inputI} id='txtInterest'  ref={txtInterest} required step='any' autoComplete={false}/>
                 <button  className={Styles.btnCancel} onClick={props.onClose}>
                     Cancelar
                </button> 
                <input 
                    type='submit'  
                    value='Crear'
                    className={Styles.btnCreate}
                />
            
                </form>
            </div>
        </Modal>
    )
}

export default ModalCreateDiagram