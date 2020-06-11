import React from 'react'
import Styles from './formSelectMethod.module.css'
class FormSelectMethod extends React.Component{
    state={
        optionChecked:0
    }
    methods=['VPN','CAUE/BAUE','TIR'];
    
    changeActive=(i)=>{
        this.setState({optionChecked:i})
    }

    render(){
        return (
            <div className={Styles.selectMethod}>
               <h2>Selecciona un metodo de analisis</h2>  

               {this.methods.map((method,i)=>{
                    const activeRadio=i===this.state.optionChecked?Styles.active:'';
                    const activeOption=i===this.state.optionChecked?Styles.activeOption:'';
                    
                    return(
                    <label htmlFor={method} className={`${Styles.option} ${activeOption}`} key={i} onClick={()=>{this.changeActive(i)}}>
                            <input type="radio" id={method} name="method" value={method} className={Styles.radio} defaultChecked={i===this.state.optionChecked?true:false} />
                            <label htmlFor={method}>{method}</label>
                            <div className={`${Styles.customRadio} ${activeRadio}`}></div>
                    </label>
               )
               })} 
               
            </div>
        )
    }

}

export default FormSelectMethod;
