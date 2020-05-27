import React from 'react'
import plus from '../../assets/plus.png'
import compare from '../../assets/compare.png'
import Styles from './navigation.module.css'
import Modal from '../Modal'

class Navigation extends React.Component{
   
    state={
        visibleNew:false,
        visibleCompare:false
    }
    displayCreateDiagram=()=>{
        this.setState({
            visibleNew:true,
            visibleCompare:false
        })
    }
    closeCreateDiagram=()=>{
        this.setState({
            visibleNew:false,
            visibleCompare:false
        })
    }
    
    render(){
        return(
            <div className={Styles.nav} >
                <button onClick={this.displayCreateDiagram} className={Styles.btn}>
                    <img src={plus}/> 
                    <span className={Styles.label}>nuevo</span>
                </button>
                <button onClick={()=>{alert('en construccion')}} className={`${Styles.btn} ${Styles.plus}`}>
                    <img src={compare}/> 
                    <span className={Styles.label}>comparar</span>
                </button>
               {/*Fix Reutilizar creando componente modal*/}
                <Modal visible={this.state.visibleNew}>
                    <h2 className={Styles.title}>Nuevo Diagrama</h2>
                    <label htmlFor='txtTitle'  className={Styles.label}>Titulo</label>
                    <input type='text' name='title'  className={Styles.input} id='txtTitle' autoFocus/>
                    <button  className={Styles.btnCancel} onClick={this.closeCreateDiagram}>
                         Cancelar
                    </button> 
                    <button  
                        className={Styles.btnCreate}
                        onClick={()=>{
                            //se llama a la funcion crear nuevo diagrama y se pasa como parametro el valor del titulo
                            this.props.onNew(document.getElementById('txtTitle').value)
                            //se cierra el modal
                            this.closeCreateDiagram();
                        }}>
                            Crear
                    </button>
                </Modal>
            </div>
        )
    }

}

export default Navigation