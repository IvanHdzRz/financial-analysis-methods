import React from 'react'
import Styles from './diagramSelector.module.css'

const DiagramSelector = (props) =>{
    function displayButtons(){
        const buttons=[]
        props.diagrams.forEach(function (diagram,key)  {
                const active=(props.focus===key)?Styles.active:' ';
                buttons.push(
                    <button key={key} onClick={()=>props.onSelectDiagram(key)} className={`${Styles.btn} ${active}`}>
                        {diagram.title}
                    </button>
                )
        })
        return buttons;
    }
    
    return(
        <div className={Styles.selector}>
          {displayButtons()}
           
        </div>
    )

}

export default DiagramSelector;