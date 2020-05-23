import React from 'react';
import ReactDOM from 'react-dom';
import Diagram from './classes/Diagram.js';
import Navigation from './components/Navigation';
import Styles from './app.module.css'
class App extends React.Component{
  
  constructor(){
    super();
    //al inicial la aplicacion se crea un diagrama inicial sin titulo y sin montos
    // y se inserta en el MAP de diagramas como, key se toma el id del diagrama
    this.initialDiagram=new Diagram('sin titulo',[]);
    this.Diagrams=new Map();
    this.Diagrams.set(this.initialDiagram.id,this.initialDiagram)
    this.state={
      Diagrams:this.Diagrams,
    }
  }

  newDiagram=(title)=>{
    //se crea nuevo diagrama
    const newDiagram= new Diagram(title)
    const actualDiagrams= this.state.Diagrams
    actualDiagrams.set(newDiagram.id,newDiagram);
    //se agrega al estado...
    this.setState({Diagrams:actualDiagrams});
    console.log(this.state);
  }
  
  render (){
    const {app}=Styles;
    return (
      <div className={app}>
        
        <Navigation onNew={this.newDiagram} />
        
      </div>
    )
  }
}





ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

