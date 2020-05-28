import React from 'react';
import Options from './../Options';
import AmountSelector from '../AmountSelector/AmountSelector';
import Styles from './workBench.module.css'
import FormGradient from '../FormGradient'
import FormUniform from '../FormUniform'
import FormUnique from '../FormUnique'
import EditableProperty from '../EditableProperty'
import Modal from '../Modal'

class WorkBench extends React.Component{
    state={
        showTitleEditor:false,
        showInterestEditor:false,
    }  
    newTitle=React.createRef();
    showTitleEditor=()=>{
        this.setState({
            showTitleEditor:true,
            showInterestEditor:false,
        })
    }
    closeEdit=()=>{
        this.setState({
            showTitleEditor:false,
            showInterestEditor:false,
        })
    }
    render(){
        {/*Objeto que representa las pestañas de la seccion agregar*/}
        const agregarTabs=new Map();
        agregarTabs.set(1,{header:'unico',children:<FormUnique  type='create' onAction={this.props.onAdd} id_diagram={this.props.value.id}/>})
        agregarTabs.set(2,{header:'uniforme',children:<FormUniform  type='create' onAction={this.props.onAdd} id_diagram={this.props.value.id}/>})
        agregarTabs.set(3,{header:'gradiente',children:<FormGradient  type='create' onAction={this.props.onAdd} id_diagram={this.props.value.id}/>})
    
        {/*Objeto que representa las pestañas de la seccion opciones*/}
        const tabs = new Map();
        tabs.set(1,{header:'agregar',children:<AmountSelector tabs={agregarTabs} defaultDisplayed={1}/>})
        tabs.set(2,{header:'ver tabla',children:<h1>seccion tabla</h1>})
        const seccionAgregar=1; 
        
        const {title,interest,id}=this.props.value;
        const isVisibleEditTitle=(this.state.showTitleEditor===true)?true:false;
        console.log(title)
        return(
            <div className={Styles.workbench}>
                <div className={Styles.diagram}>
                    <div className={Styles.title}>
                        <EditableProperty onEdit={this.showTitleEditor}>
                            {title}
                        </EditableProperty>
                    </div>
                    <div className={Styles.vpn}>
                        <p>VPN:</p>
                        <p>$1246</p>
                    </div>
                    
                    <div className={Styles.interest}>
                        <p>interes</p>
                        <EditableProperty onEdit={this.showTitleEditor} >
                            {`${interest}%`}
                        </EditableProperty>
                    </div>
                    
                    <div className={Styles.cashflow}>

                    </div>
                </div>
                <div className={Styles.options}>
                    <span>Montos</span>
                    <Options 
                        tabs={tabs} 
                        defaultDisplayed={seccionAgregar}
                    />
                </div>
                <Modal visible={isVisibleEditTitle}>
                   <div className='formEditTitle'>
                        
                        <label htmlFor='txtTitle'  className={Styles.label}>nuevo titulo</label>
                        <input type='text' name='title'  className={Styles.input} id='txtTitle' autoFocus ref={this.newTitle}/>
                        <button 
                            onClick={()=>{
                                this.props.onTitleEdit(id,this.newTitle.current.value)
                                this.closeEdit();
                            }}>
                            guardar
                        </button>
                        <button onClick={this.closeEdit}>
                            cancel
                        </button>
                   </div>
                </Modal>
            </div>
        )
    }
}

export default WorkBench