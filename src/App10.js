import React, { Component }  from 'react';
import  { Container, Button } from "react-bootstrap";
// import  LifeCycle from "./LifeCycle";
import  MyComponent from "./ParentComponent";
import  PureComponent from "./PureComponent";

import Form from './Form';
import Result from './components/Game';
// import './App.css';
// import Btn from'./components/CustomBtn';
class App extends Component{
  // state ={
  //   display:true
  // }
  // effancerOuAfficher=()=>{
  //   this.setState({
  //     display:!this.state.display
  //   })

  // }

  state={
age:27,
name: "Torro"


  }
  addOneYear=()=>{
    this.setState((prevState)=>({

        age:prevState.age + 1
    }))
}
changeToBatman=()=>{
  this.setState({
      name:"Batman"
  })
}
  render(){
  // const showComponent = this.state.display ? (<LifeCycle name="Toto 2"/>):(<div></div>);
  return(
    <div className='App'>
     <MyComponent
     age={this.state.age}
      name={this.state.name}/>
     <PureComponent 
     name={this.state.name}/>

<button onClick={this.addOneYear}>Changer le props</button>
<button onClick={this.changeToBatman}>Set Batman</button>


    </div>
  )
}

}


export default App;