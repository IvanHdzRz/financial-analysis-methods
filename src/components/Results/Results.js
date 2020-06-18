import React from 'react'
import Diagram from '../../classes/Diagram';
import convertToFne from './convertToFne'
import matchDuration from './matchDuration';
import extendDurationTo from './extendDurationTo'
import compareFneTablesBy from './compareFneTablesBy'
class Results extends React.Component{
    state={
        done:false,
        results:'',
        matchedDuration:0
    }
    
    compare=()=>{
        
        const {diagramsSelected,diagrams,method}=this.props
        let results;
        let fneTables = convertToFne(diagramsSelected,diagrams);
        const matchedDuration=matchDuration(fneTables);
        fneTables=extendDurationTo(matchedDuration,fneTables);
        console.log(fneTables)
        
        results =compareFneTablesBy(method,fneTables);
        this.setState({done:true,results:results,matchedDuration:matchedDuration})
        
        
    }
    render(){
        const ready=this.state.done;
        if(!ready){
            return(
                <div>
                    <h1>Calculando...</h1>
                    {this.compare()}
                </div>
            )
        }else{
            return (
                <div>
                    <p>Utilizando el metodo {this.props.method} e igualando los diagramas a una duracion de {this.state.matchedDuration}</p>
                    <p>la mejor alterntiva de inversion es: {this.state.results[0].title} con un {this.props.method} de ${new Intl.NumberFormat("es-MX").format(this.state.results[0].vpn)}</p>
                </div>
            )
        }
    }
}

export default Results