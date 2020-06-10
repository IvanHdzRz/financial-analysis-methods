import React from 'react';
import Options from './../Options';
import AmountSelector from '../AmountSelector/AmountSelector';
import Styles from './workBench.module.css'
import FormGradient from '../FormGradient'
import FormUniform from '../FormUniform'
import FormUnique from '../FormUnique'
import EditableProperty from '../EditableProperty'
import ModalEditProperty from '../ModalEditProperty'
import Cashflow from '../CashFlow'; 
import FneTable from '../../classes/FneTable'
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
    showInterestEditor=()=>{
        this.setState({
            showTitleEditor:false,
            showInterestEditor:true,
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
        
        const {title,interest,id,amounts}=this.props.value;
        const isVisibleEditTitle=(this.state.showTitleEditor===true)?true:false;
        const isVisibleEditInterest=(this.state.showInterestEditor===true)?true:false;
        
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
                        <p>${new Intl.NumberFormat("es-MX").format(new FneTable(amounts).getVpn(interest/100))}</p>
                    </div>
                    
                    <div className={Styles.interest}>
                        <p>interes</p>
                        <EditableProperty onEdit={this.showInterestEditor} >
                            {`${interest}%`}
                        </EditableProperty>
                    </div>
                    
                    <Cashflow FneTable={new FneTable(amounts).value} />
                    
                </div>
                <div className={Styles.options}>
                    <span>Montos</span>
                    <Options 
                        tabs={tabs} 
                        defaultDisplayed={seccionAgregar}
                    />
                </div>
                <ModalEditProperty 
                    visible={isVisibleEditTitle} 
                    onEdit={this.props.onTitleEdit} 
                    onClose={this.closeEdit} 
                    title={'Nuevo titulo'}   
                    id={id} 
                    type='text'
                />
                <ModalEditProperty 
                    visible={isVisibleEditInterest} 
                    onEdit={this.props.onInterestEdit} 
                    onClose={this.closeEdit} 
                    title={'Nuevo interes'}   
                    id={id} 
                    type='float'
                />

            </div>
        )
    }
}

export default WorkBench