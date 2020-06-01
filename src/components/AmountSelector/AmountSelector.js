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
            let active=(id===this.state.optionsShowed)?Styles.active:' ';
            let activeRadio=(id===this.state.optionsShowed)?Styles.activeRadio:' ';
            let activePoint=(id===this.state.optionsShowed)?Styles.activePoint:' ';
            checked=(this.props.defaultDisplayed===id)?true:false;
            headers.push(
                <div className={Styles.header} key={id}>
                    <div className={`${Styles.customRadio} ${activeRadio}`} onClick={()=>{this.changeTab(id)}}>
                        <div className={`${Styles.point} ${activePoint}`}></div> 
                    </div>
                    <input 
                        type="radio" 
                        id={`${id}_Amount`} 
                        name="Amount" 
                        value={tab.header} 
                        defaultChecked={checked}
                        onClick={()=>{this.changeTab(id)}}
                    />
                    <label htmlFor={`${id}_Amount`} className={`${Styles.label} ${active}`}>
                        {tab.header}
                    </label>
                </div>
                )
        });
        return headers;
    }

    render(){
         
        return (
            <div className={Styles.AmountSelector}>
                <div className={Styles.headers}>
                   <span>Tipo:</span>
                   {this.displayHeaders()}
                </div>        
                <div className={Styles.tabSelected}>
                    {this.props.tabs.get(this.state.optionsShowed).children}
                </div>
            </div>
        );
    }
}
 
export default AmountSelector;