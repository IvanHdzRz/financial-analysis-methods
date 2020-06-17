import React from 'react'
import Diagram from '../../classes/Diagram';

const Results =(props)=>{
    
    return(
        <div>
            el metodo elegido fue: {props.method} <br/>
            los diagramas elegidos fueron :
            <ul>
                {props.diagramsSelected.map(id=><li>{props.diagrams.get(id).title}</li>)}        
            </ul>

        </div>
    )
}

export default Results