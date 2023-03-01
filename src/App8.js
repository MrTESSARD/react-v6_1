import React, { Component }  from 'react';
import  { Container, Button } from "react-bootstrap";
import  LifeCycle from "./LifeCycle";

import Form from './Form';
import Result from './components/Game';
// import './App.css';
// import Btn from'./components/CustomBtn';
class App extends Component{
  state ={
    display:true
  }
  effancerOuAfficher=()=>{
    this.setState({
      display:!this.state.display
    })

  }
render(){
  const showComponent = this.state.display ? (<LifeCycle name="Toto 2"/>):(<div></div>);
  return(
    <div className='App'>
      {showComponent}
      <Button onClick={this.effancerOuAfficher}>Cliquez ici</Button>

    </div>
  )
}

}


export default App;