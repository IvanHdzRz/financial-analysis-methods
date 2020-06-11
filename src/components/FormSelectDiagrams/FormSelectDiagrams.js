import React from 'react'
import Styles from './formSelectDiagram.module.css'
class FormSelectDiagram extends React.Component{
    constructor(props){
        super(props)
        this.initDiagramsState=this.initializeDiagramsState();
        this.state={
            diagramsState:this.initDiagramsState
        }
    }
    initializeDiagramsState=()=>{
        const diagramsState=new Map()
        this.props.diagrams.forEach((diagram,id)=>{
            diagramsState.set(id,'uncheck');
        })
        return diagramsState
    }
    

    changeDiagramState=(e,id)=>{
        console.log('hola')
        const prevState=this.state;
        const {diagramsState}=prevState;
        const newState=diagramsState.get(id)==='check'?'uncheck':'check';
        diagramsState.set(id,newState)
        this.setState({diagramsState:diagramsState});
        e.stopPropagation()
    }
    
    displayDiagrams=()=> {
        const {diagrams}=this.props
        const {diagramsState}=this.state
        const checkBoxes=[]
        let active;
        diagrams.forEach((diagram,id) => {
           
            active=diagramsState.get(id)==='check'?Styles.active:'';
            
            checkBoxes.push(
                <label 
                    key={id+'div option'} 
                    htmlFor={id} 
                    className={`${Styles.diagramOption} ${active}`} 
                    >
                        <input 
                            type="checkbox" id={id} key={id} 
                            name="diagramsTobeSelected" 
                            value={id} 
                            className={'diagramCheckbox'}
                            onChange={(e)=>{this.changeDiagramState(e,id)}}   
                        />
                        <label htmlFor={id} key={id+'label'}>{diagram.title}</label>
                        
                    
                </label>
            )
           
        });
        return checkBoxes;
    }

    render(){
        return(
            <>
            <h2 className={Styles.title}>Selecciona los diagramas a comparar</h2>
            <div className={Styles.formSelectDiagram}>
                
                {this.displayDiagrams()}
            </div>
            </>
        )
    }
    
}

export default FormSelectDiagram;