import React from 'react'
import Modal from '../Modal'
import Styles from './modalEditProperty.module.css'
const ModalEditProperty = (props)=>{
    if(props.visible===false){
        return  null
    }else{
        const newValue= React.createRef();
        return (
            
            <Modal visible={true}>
                    <div className={Styles.formEdit}>
                            
                            <label htmlFor='txtEdit'  className={Styles.label}>{props.title}</label>
                            <input type='text' name='Edit'  className={Styles.input} id='txtEdit' autoFocus ref={newValue}/>
                            <button 
                                className={`${Styles.btn} ${Styles.confirm}`}
                                onClick={()=>{
                                    props.onEdit(props.id,newValue.current.value)
                                    props.onClose();
                                }}>
                                guardar
                            </button>
                            <button 
                                className={`${Styles.btn} ${Styles.cancel}`}
                                onClick={props.onClose}>
                                cancel
                            </button>
                    </div>
            </Modal>
        )
    }    
}

export default ModalEditProperty;