import React from 'react';
import Options from './../Options';

const WorkBench =(props)=>{
    
    const tabs = new Map();
    tabs.set(1,{header:'agregar',children:<h1>seccion agregar</h1>})
    tabs.set(2,{header:'ver tabla',children:<h1>seccion tabla</h1>})
    const seccionAgregar=1; 
    return(
        <div className='workbench'>
            <div className='options'>
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