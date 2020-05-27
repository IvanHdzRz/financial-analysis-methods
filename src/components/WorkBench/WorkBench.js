import React from 'react';
import Options from './../Options';
import AmountSelector from '../AmountSelector/AmountSelector';
import Styles from './workBench.module.css'
import FormGradient from '../FormGradient'
import FormUniform from '../FormUniform'
import FormUnique from '../FormUnique'
import EditableProperty from '../EditableProperty'
const WorkBench =(props)=>{
    {/*Objeto que representa las pestañas de la seccion agregar*/}
    const agregarTabs=new Map();
    agregarTabs.set(1,{header:'unico',children:<FormUnique  type='create' onAction={props.onAdd} id_diagram={props.value.id}/>})
    agregarTabs.set(2,{header:'uniforme',children:<FormUniform  type='create' onAction={props.onAdd} id_diagram={props.value.id}/>})
    agregarTabs.set(3,{header:'gradiente',children:<FormGradient  type='create' onAction={props.onAdd} id_diagram={props.value.id}/>})
   
    {/*Objeto que representa las pestañas de la seccion opciones*/}
    const tabs = new Map();
    tabs.set(1,{header:'agregar',children:<AmountSelector tabs={agregarTabs} defaultDisplayed={1}/>})
    tabs.set(2,{header:'ver tabla',children:<h1>seccion tabla</h1>})
    const seccionAgregar=1; 
    const viewPeriods=()=>{
        let lista = [];
        props.value.amounts.forEach(Amount => {
            const {id,type,amount,label}=Amount.properties;
            lista.push(<li key={Amount.id}>{`${type} ${amount} ${label}`}</li>)
        });
        return lista;
    }
    const hola=()=>{
        alert('hola');
    }
    const {title,interest}=props.value;
    console.log(title)
    return(
        <div className={Styles.workbench}>
            <div className={Styles.diagram}>
                <div className={Styles.title}>
                    <EditableProperty onEdit={hola}>
                        {title}
                    </EditableProperty>
                </div>
                <div className={Styles.vpn}>
                    <p>VPN:</p>
                    <p>$1246</p>
                </div>
                
                <div className={Styles.interest}>
                    <p>interes</p>
                    <EditableProperty onEdit={hola} >
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
        </div>
    )
}

export default WorkBench