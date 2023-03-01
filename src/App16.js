
import './App.css';


import React, {Component} from 'react'
import Vegeta from './Vegeta';
import Goku from './Goku';
import Frieza from './Frieza';
import ErrorBoundary from './components/ErrorBoundary';

class  App extends Component {
  // constructor(props) {
  //   super(props)
  // this.state={
  //   vegeta:100,
  //   goku:100
  // }
    
  // }
  // componentDidUpdate(prevProps, prevState) {
  //     this.myTitle.current.style.color="red"
      
  // }


//   reduceLife=(param, param2)=>{
//      if (param=="Goku") {
//       this.setState({
//         vegeta:this.state.vegeta-param2
//       })
       
//      }else{
//       this.setState({
//         goku:this.state.goku-param2
//      })

//   }
// }



  render(){



    return (
      <div className="cantainer text-center">
        {/* <MyRef name={"toto"} ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button> */}
        <h1> Cliquez sur les gentils</h1>
        <hr/>
        <div className="row">
          <ErrorBoundary >
          <Vegeta 
          // name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}
          />
          </ErrorBoundary>
          <ErrorBoundary >
          
          <Goku 
          // name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}
          />
          </ErrorBoundary>
          <ErrorBoundary >
          <Frieza 
          // name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}
          />
          </ErrorBoundary>


        </div>
  
        
        </div>
    )
  }
}



 




export default App;