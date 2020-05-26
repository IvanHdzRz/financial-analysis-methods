import React from 'react';
import ReactDOM from 'react-dom';
import Diagram from './classes/Diagram.js';
import Navigation from './components/Navigation';
import Styles from './app.module.css'
import DiagramSelector from './components/DiagramSelector'
import WorkBench from './components/WorkBench'
import Amount from './classes/Amount';

class App extends React.Component{
  
  constructor(){
    super();
    //al iniciar la aplicacion se crea un diagrama inicial sin titulo y sin montos
    // y se inserta en el MAP de diagramas, como key se toma el id del diagrama
    this.initialDiagram=new Diagram('sin titulo',new Map(),10);
    this.Diagrams=new Map();
    this.Diagrams.set(this.initialDiagram.id,this.initialDiagram)
    this.state={
      Diagrams:this.Diagrams,
      DiagramOnFocus:1,
    }
  }
  changeFocusedDiagram=(key)=>{
    const newFocus=key;
    //sobre escribe la propiedad diagram on focus de estado
    this.setState({...this.state,DiagramOnFocus:newFocus})
    
  }
  addAmount=(id_diagram,amountProperties)=>{
    
    const focus=this.state.DiagramOnFocus;
    //obtengo todos los diagramas del estado
    const actualDiagrams=this.state.Diagrams;
    //obtengo las props del diagrama al que se le agregaran montos
    const {title,amounts}=actualDiagrams.get(id_diagram)
    //agrego el nuevo monto que me llega como parametro al array de montos del diagrama
    const newAmount= new Amount(amountProperties);
    amounts.set(newAmount.id,newAmount);
    //actualizo las props del diagrama
    actualDiagrams.set(id_diagram,{id:id_diagram,title:title,amounts:amounts});
    //actualizo el estado de la app
    this.setState({Diagrams:actualDiagrams,DiagramOnFocus:focus});
    
    console.log(this.state.Diagrams.get(id_diagram).amounts,id_diagram);
    
  }
  newDiagram=(title)=>{
    //se crea nuevo diagrama
    const newDiagram= new Diagram(title,[],10)
    const actualDiagrams= this.state.Diagrams
    actualDiagrams.set(newDiagram.id,newDiagram);
    //se agrega al estado...
    this.setState({Diagrams:actualDiagrams});
    console.log(this.state);
  }
  
  render (){
    const {app}=Styles;
    const diagrams=this.state.Diagrams;
    return (
      <div className={app}>
        <DiagramSelector 
          diagrams={diagrams}
          onSelectDiagram={this.changeFocusedDiagram} 
          focus={this.state.DiagramOnFocus}
          className={Styles.diagramSelector}
        />
        <WorkBench 
          value={this.state.Diagrams.get(this.state.DiagramOnFocus)}
          className={Styles.workBench} onAdd={this.addAmount}

        />
        <Navigation onNew={this.newDiagram} />
        
      </div>
    )
  }
}





ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

