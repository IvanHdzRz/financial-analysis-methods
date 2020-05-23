import React from 'react'
import plus from '../../assets/plus.png'
import compare from '../../assets/compare.png'
import Styles from './navigation.module.css'
import NewDiagram from '../NewDiagram'

class Navigation extends React.Component{
   
    state={
        visibleNew:false,
        visibleCompare:false
    }
    displayCreateDiagram=()=>{
        this.setState({
            visibleNew:true,
            visibleCompare:false
        })
    }
    closeCreateDiagram=()=>{
        this.setState({
            visibleNew:false,
            visibleCompare:false
        })
    }
    
    render(){
        return(
            <div className={Styles.nav} >
                <button onClick={this.displayCreateDiagram} className={Styles.btn}>
                    <img src={plus}/> 
                    <span className={Styles.label}>nuevo</span>
                </button>
                <button onClick={this.props.onNew} className={`${Styles.btn} ${Styles.plus}`}>
                    <img src={compare}/> 
                    <span className={Styles.label}>comparar</span>
                </button>
                <NewDiagram 
                    visible={this.state.visibleNew} 
                    onClose={this.closeCreateDiagram} 
                    onNew={this.props.onNew}
                />
            </div>
        )
    }

}

export default Navigation