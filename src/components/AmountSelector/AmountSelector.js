import React from 'react';
import Styles from './amountSelector.module.css'

class AmountSelector extends React.Component {
    
    state={
        optionsShowed:this.props.defaultDisplayed
    }
    
    changeTab=(newTabOnFocus)=>{
        this.setState({optionsShowed:newTabOnFocus})
    }
    displayHeaders=()=>{
        const headers=[];
        let checked;
        this.props.tabs.forEach((tab,id) => {
            let active=(id===this.state.optionsShowed)?'Active':' ';
            checked=(this.props.defaultDisplayed===id)?true:false;
            headers.push(
                <div className='option' key={id}>
                    <input 
                        type="radio" 
                        id={`${id}_Amount`} 
                        name="Amount" 
                        value={tab.header} 
                        defaultChecked={checked}
                        onClick={()=>{this.changeTab(id)}}
                    />
                    <label htmlFor={`${id}_Amount`}>{tab.header}</label>
                </div>
                )
        });
        return headers;
    }

    render(){
         
        return (
            <div className='options'>
                <div className={Styles.headers}>
                   <span>Tipo:</span>
                   {this.displayHeaders()}
                </div>        
                <div className='tab selected'>
                    {this.props.tabs.get(this.state.optionsShowed).children}
                </div>
            </div>
        );
    }
}
 
export default AmountSelector;