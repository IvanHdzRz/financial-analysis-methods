import React from 'react';

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
            let active=(id===this.state.optionsShowed)?'Active':' ';
            headers.push(
                <button key={id} onClick={()=>{this.changeTab(id)}} className={active}> 
                    {tab.header} 
                </button>
                )
        });
        return headers;
    }

    render(){
         
        return (
            <div className='options'>
                <div className='Headers'>
                   {this.displayHeaders()}
                </div>        
                <div className='tab selected'>
                    {this.props.tabs.get(this.state.optionsShowed).children}
                </div>
            </div>
        );
    }
}
 
export default Options;