import React from 'react';
import Options from './../Options';
import AmountSelector from '../AmountSelector/AmountSelector';
import Styles from './workBench.module.css'
const WorkBench =(props)=>{
    {/*Objeto que representa las pestañas de la seccion agregar*/}
    const agregarTabs=new Map();
    agregarTabs.set(1,{header:'unico',children:<h1>Unico</h1>})
    agregarTabs.set(2,{header:'uniforme',children:<h1>uniforme</h1>})
    agregarTabs.set(3,{header:'gradiente',children:<h1>gradiente</h1>})
   
    {/*Objeto que representa las pestañas de la seccion opciones*/}
    const tabs = new Map();
    tabs.set(1,{header:'agregar',children:<AmountSelector tabs={agregarTabs} defaultDisplayed={1}/>})
    tabs.set(2,{header:'ver tabla',children:<h1>seccion tabla</h1>})
    const seccionAgregar=1; 
    
    return(
        <div className={Styles.workbench}>
            <div className={Styles.diagram}>
                {props.value.title}
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