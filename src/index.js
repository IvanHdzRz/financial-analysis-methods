import React from 'react';
import ReactDOM from 'react-dom';
import Diagram from './classes/Diagram.js';
import Navigation from './components/Navigation';
import Styles from './app.module.css'
import DiagramSelector from './components/DiagramSelector'
import WorkBench from './components/WorkBench'
class App extends React.Component{
  
  constructor(){
    super();
    //al iniciar la aplicacion se crea un diagrama inicial sin titulo y sin montos
    // y se inserta en el MAP de diagramas, como key se toma el id del diagrama
    this.initialDiagram=new Diagram('sin titulo',[]);
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
          className={Styles.workBench}
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

