
import './App.css';


import React, {Component} from 'react'
import Vegeta from './Vegeta';
import Goku from './Goku';

class  App extends Component {
  constructor(props) {
    super(props)
  this.state={
    vegeta:100,
    goku:100
  }
    
  }
  // componentDidUpdate(prevProps, prevState) {
  //     this.myTitle.current.style.color="red"
      
  // }


  reduceLife=(param, param2)=>{
     if (param=="Goku") {
      this.setState({
        vegeta:this.state.vegeta-param2
      })
       
     }else{
      this.setState({
        goku:this.state.goku-param2
     })

  }
}



  render(){



    return (
      <div className="cantainer text-center">
        {/* <MyRef name={"toto"} ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button> */}
        <h1> Goku Vs Vegeta</h1>
        <hr/>
        <div className="row">
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>


        </div>
  
        
        </div>
    )
  }
}



 




export default App;