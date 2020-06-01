import React from 'react';
import Styles from './options.module.css'
class Options extends React.Component {
    
    state={
        optionsShowed:this.props.defaultDisplayed
    }
    
    changeTab=(newTabOnFocus)=>{
        this.setState({optionsShowed:newTabOnFocus})
    }
    displayHeaders=()=>{
        const headers=[];
        this.props.tabs.forEach((tab,id) => {
            let active=(id===this.state.optionsShowed)?Styles.active:' ';
            headers.push(
                <button key={id} onClick={()=>{this.changeTab(id)}} className={`${Styles.tabHeader} ${active}`}> 
                    {tab.header} 
                </button>
                )
        });
        return headers;
    }

    render(){
         
        return (
            <div className={Styles.options}>
                <div className={Styles.headers}>
                   {this.displayHeaders()}
                </div>        
                <div className={Styles.tabSelected}>
                    {this.props.tabs.get(this.state.optionsShowed).children}
                </div>
            </div>
        );
    }
}
 
export default Options;