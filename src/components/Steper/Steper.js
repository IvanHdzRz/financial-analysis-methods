import React from 'react'
import Modal from '../Modal'
import Styles from './steper.module.css'
import Results from '../Results'
class Steper extends React.Component{
    state={
        step:0,
        methodChoosen:'',
        diagramsChoosen:[],
        error:false,
        msgError:'',
        lastStep:2,
    }
    closeErrorModal=()=>{
        const prevState=this.state;
        this.setState({...prevState,error:false})
    }
    nextStep=(e)=>{
        //cada vez que se haga un paso guardar la opcion escojida y guadarla en opcions
        const prevState=this.state
        const prevStep=prevState.step
        this.setState({step:prevStep+1})
        
        e.preventDefault();
    }
    prevStep=()=>{
        const prevState=this.state
        const currentStep=prevState.step;
        this.setState({step:currentStep-1})
    }
    //guarda el metodo seleccionado y pasa al siguiente form
    saveMethodSelected=(currentStep)=>{
        const prevState=this.state
        const method=document.querySelector('input[name="method"]:checked').value
        this.setState({...prevState,methodChoosen:method,step:currentStep+1})
        
    }
    saveDiagramsSelected=(currentStep)=>{
        const prevState=this.state;
        const checkboxes=document.getElementsByClassName('diagramCheckbox')
        let count=0;
        const diagramsSelected=[];
       for(let i=0;i<checkboxes.length;i++){
            if(checkboxes[i].checked){
                count++
                diagramsSelected.push(checkboxes[i].value)
            }
       } 
        
        if(count>0){
        this.setState({...prevState,step:currentStep+1,diagramsChoosen:diagramsSelected})
        }else{
            this.setState({...prevState,error:true,msgError:'selecciona por lo menos un diagrama'})
        }
    }
    hadleSubmit=(e)=>{
        const currentStep=this.state.step;
        if(currentStep===0){
            this.saveMethodSelected(currentStep);
        }
        if(currentStep===1){
            this.saveDiagramsSelected(currentStep);
        }
        e.preventDefault()
    }
    render(){
        const currentStep=this.state.step
        const {methodChoosen,diagramsChoosen}=this.state
        let body;
        if(currentStep<this.state.lastStep){
            body=(
                <form onSubmit={this.hadleSubmit} id='formSteper'>
                    {/*muestra el formulario del paso actual*/}
                    {this.props.steps[currentStep]}
                    <input 
                        type='submit' 
                        value='siguiente >' 
                        disabled={currentStep<this.props.steps.length?false:true}
                        className={Styles.btnNext}    
                    />
                    
                </form>
            )
        }else{
            body=(<Results method={methodChoosen} diagramsSelected={diagramsChoosen.map(id=>parseInt(id))} diagrams={this.props.diagrams}/>)
        }

        return(

            <div className={Styles.steper}>
                <button className={Styles.btnBack} onClick={this.prevStep} disabled={currentStep===0?true:false}>
                     {'< Regresar'}
                </button>

                
                {body}
                <Modal visible={this.state.error}>
                    <h2>{this.state.msgError}</h2>
                    <button onClick={this.closeErrorModal}>Entendido</button>
                </Modal>
            </div>
        )
    }

}

export default Steper