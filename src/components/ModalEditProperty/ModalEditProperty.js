import React from 'react'
import Modal from '../Modal'
import Styles from './modalEditProperty.module.css'
const ModalEditProperty = (props)=>{
    const newValue= React.createRef();
    const edit=(e)=>{
        props.onEdit(props.id,newValue.current.value)
        props.onClose();
        e.preventDefault();
    }
    if(props.visible===false){
        return  null
    }else{
        
        return (
            
            <Modal visible={true}>
                    <div className={Styles.formEdit}>
                            <form onSubmit={edit}>
                            <label htmlFor='txtEdit'  className={Styles.label}>{props.title}</label>
                            <input type={props.type} name='Edit'  className={Styles.input} id='txtEdit' autoFocus ref={newValue} required/>
                            <input 
                                type='submit' 
                                value='guardar'
                                className={`${Styles.btn} ${Styles.confirm}`}
                            />
                               
                            <button 
                                className={`${Styles.btn} ${Styles.cancel}`}
                                onClick={props.onClose}>
                                cancel
                            </button>
                            </form>
                    </div>
            </Modal>
        )
    }    
}

export default ModalEditProperty;