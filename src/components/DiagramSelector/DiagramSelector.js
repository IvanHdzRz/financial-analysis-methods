import React from 'react'
import Styles from './diagramSelector.module.css'
import iconAdd from '../../assets/plus.png'
import ModalCreateDiagram from '../ModalCreateDiagram'
class DiagramSelector extends React.Component{
    state={
        visibleNew:false
    }

    displayCreateDiagram=()=>{
        this.setState({
            visibleNew:true,
        })
    }
    closeCreateDiagram=()=>{
        this.setState({
            visibleNew:false,
        })
    } 
    

    
    displayButtons=()=>{
        const buttons=[]
        
        
        this.props.diagrams.forEach( (diagram,key)=> {
                const active=(this.props.focus===key)?Styles.active:' ';
                buttons.push(
                    <button key={key} onClick={()=>{this.props.onSelectDiagram(key)}} className={`${Styles.btn} ${active}`}>
                        {diagram.title}
                    </button>
                )
        })
        return buttons;
    }
    render(){
        return(
            <div className={Styles.DiagramSelector}>
                <div className={Styles.selector}>
                    {this.displayButtons()}
                </div>
                <div className={Styles.addDiagram}>
                    <button className={Styles.btnAdd} onClick={this.displayCreateDiagram}>
                        +
                    
                    </button>
                </div>
                <ModalCreateDiagram  visible={this.state.visibleNew} onNew={this.props.onNew} onClose={this.closeCreateDiagram}/>
            </div>
        )
    }
}

export default DiagramSelector;