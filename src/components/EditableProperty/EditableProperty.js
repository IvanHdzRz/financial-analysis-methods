import React from 'react'
import editIcon from '../../assets/pencil.png'
import Styles from './editableProperty.module.css'
const EditableProperty =(props)=>{
    return (
        <div className={Styles.editableProperty}>
            <span>{props.children} </span> 
            <button onClick={props.onEdit} className={Styles.btnEdit}>
                <img  src={editIcon} alt='editar'/>
            </button>
        </div>
    )
}

export default EditableProperty;