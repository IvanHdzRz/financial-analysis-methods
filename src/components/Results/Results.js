import React from 'react'
import Diagram from '../../classes/Diagram';
import convertToFne from './convertToFne'
import matchDuration from './matchDuration';
import extendDurationTo from './extendDurationTo'
import compareFneTablesBy from './compareFneTablesBy'
const Results =(props)=>{
    
    const {diagramsSelected,diagrams,method}=props
    let results;
    const fneMustBeExtended=method!=='CAUE/BAUE';
    let fneTables = convertToFne(diagramsSelected,diagrams);
    const matchedDuration=matchDuration(fneTables);
    fneTables=fneMustBeExtended?extendDurationTo(matchedDuration,fneTables):fneTables;
    results =compareFneTablesBy(method,fneTables);
    console.log(results)
    return(
        <div>
            <h2>results go here brrr</h2>
        </div>
    )
        
        
    
        
    
}

export default Results