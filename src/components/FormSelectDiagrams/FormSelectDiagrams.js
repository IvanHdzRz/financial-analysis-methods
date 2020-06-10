import React from 'react'

const FormSelectDiagram=(props)=>{
    const displayDiagrams=()=> {
        const {diagrams}=props
        const checkBoxes=[]
        diagrams.forEach((diagram,id) => {
            checkBoxes.push(
                <div key={id+'div option'}>
                    <input type="checkbox" id={id} key={id} name="diagramsTobeSelected" value={id} className={'diagramCheckbox'}/>
                    <label htmlFor={id} key={id+'label'}>{diagram.title}</label>
                    
                </div>
            )
           
        });
        return checkBoxes;
    }


    
    return(
        <div>

            {displayDiagrams()}
        </div>
    )
}

export default FormSelectDiagram;