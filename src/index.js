import React from 'react';
import ReactDOM from 'react-dom';
import Diagram from './classes/Diagram.js';
import Navigation from './components/Navigation';
import Styles from './app.module.css'
class App extends React.Component{
  state={
    Diagrams:[
      {diagram: new Diagram('sin titulo',[])}
    ]
  }

  newDiagram=()=>{
    //se crea nuevo diagrama
    alert('hola uwu');
    //se agrega al estado...
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

