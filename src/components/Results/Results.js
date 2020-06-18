import React from 'react'
import Diagram from '../../classes/Diagram';
import convertToFne from './convertToFne'
import matchDuration from './matchDuration';
import extendDurationTo from './extendDurationTo'
import compareFneTablesBy from './compareFneTablesBy'
const Results =(props)=>{
    const compare=()=>{
        const {diagramsSelected,diagrams,method}=props
        let results;
        let fneTables = convertToFne(diagramsSelected,diagrams);
        const matchedDuration=matchDuration(fneTables);
        fneTables=extendDurationTo(matchedDuration,fneTables);
        console.log(fneTables);
        results =compareFneTablesBy(method,fneTables);
        console.log( results);
        
    }
    return(
        <div>
            el metodo elegido fue: {props.method} <br/>
            los diagramas elegidos fueron :
            <ul>
                {props.diagramsSelected.map(id=><li>{props.diagrams.get(id).title}</li>)}        
            </ul>
            {console.log(compare())}
        </div>
    )
}

export default Results