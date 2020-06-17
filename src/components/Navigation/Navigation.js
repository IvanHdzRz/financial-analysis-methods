import React from 'react'
import Styles from './navigation.module.css'
import Modal from '../Modal'

class Navigation extends React.Component{
   
    state={
        tabDisplayed:this.props.defaultTab
    }
    changeTab=(newTabDisplayed)=>{
        this.setState({tabDisplayed:newTabDisplayed})
    }
    /*
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
    */
    
    render(){
    
        return(
            <div className={Styles.nav} >
                <div className={Styles.tabHeaders}>
                    {/*rendereiza los botones para cambiar de pestaña*/}
                    {this.props.tabsHeaders.map(header=>{
                        const active=header.id===this.state.tabDisplayed?Styles.active:'';
                        const imgIcon=header.id===this.state.tabDisplayed?header.activeIcon:header.icon;
                        return (
                            <button onClick={()=>{this.changeTab(header.id)}} className={Styles.btn} key={header.id}>
                                <img src={imgIcon} alt={header.title}/> 
                                <span className={`${Styles.labelNav} ${active}`}>{header.title}</span>
                            </button>
                        )
                    })}
                </div>
                <div className={`${Styles.tabBody}`}>
                    {this.props.tabsBody.get(this.state.tabDisplayed).body}
                </div>


                 




               {/*Fix Reutilizar creando componente modal
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
                </Modal> */}
            </div>
        )
    }

}

export default Navigation