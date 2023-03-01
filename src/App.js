
import './App.css';


import React, {Component} from 'react'
import Vegeta from './Vegeta';
import Goku from './Goku';
import AddHits from './AddHits';
// import Frieza from './Frieza';

class  App extends Component {




  render(){



    return (
      <div className="cantainer text-center">
        {/* <MyRef name={"toto"} ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button> */}
        <h1> Cliquez sur les gentils</h1>
        <hr/>
        <div className="row">
          <AddHits
          render={
            (hits, addOne, saiyan)=>(
              saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name ="Vegeta"/>
              )
            }

              />
              
          <AddHits
          render={
            (hits, addOne,  saiyan)=>(saiyan.goku &&
              <Goku hits={hits} addOne={addOne} name="Goku"

              />
            )
          }
          />


        </div>
  
        
        </div>
    )
  }
}



 




export default App;