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
    
    txtTitulo= React.createRef();
    txtInterest=React.createRef();
    render(){
        return(
            <div className={Styles.nav} >
                <button onClick={this.displayCreateDiagram} className={Styles.btn}>
                    <img src={plus}/> 
                    <span className={Styles.labelNav}>nuevo</span>
                </button>
                <button onClick={()=>{alert('en construccion')}} className={`${Styles.btn} ${Styles.plus}`}>
                    <img src={compare}/> 
                    <span className={Styles.labelNav}>comparar</span>
                </button>
               {/*Fix Reutilizar creando componente modal*/}
                <Modal visible={this.state.visibleNew}>
                    <div className={Styles.formNewDiagram}>
                        <h2 className={Styles.title}>Nuevo Diagrama</h2>
                        <label htmlFor='txtTitle'  className={Styles.label}>Titulo</label>
                        <input type='text' name='title'  className={Styles.input} id='txtTitle' autoFocus ref={this.txtTitulo}/>
                        <label htmlFor='txtInterest'  className={Styles.labelI}>Interes:</label>
                        <input type='text' name='interest'  className={Styles.inputI} id='txtInterest'  ref={this.txtInterest}/>
                        <button  className={Styles.btnCancel} onClick={this.closeCreateDiagram}>
                            Cancelar
                        </button> 
                        <button  
                            className={Styles.btnCreate}
                            onClick={()=>{
                                //se llama a la funcion crear nuevo diagrama y se pasa como parametro el valor del titulo
                                this.props.onNew(this.txtTitulo.current.value,this.txtInterest.current.value);
                                //se cierra el modal
                                this.closeCreateDiagram();
                            }}>
                                Crear
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default Navigation