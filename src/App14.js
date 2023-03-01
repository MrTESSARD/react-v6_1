
import './App.css';


import React, {Component} from 'react'
import MyRef from './MyRef';

class  App extends Component {
  constructor(props) {
    super(props)
  this.refComp=React.createRef()
    
  }
  componentDidUpdate(prevProps, prevState) {
      this.myTitle.current.style.color="red"
      
  }


  handleClick=()=>{//acceder à l'element via le ref
      
      this.refComp.current.focus()

  }

  render(){



    return (
      <div className="App">
        <MyRef name={"toto"} ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button>
  
        
        </div>
    )
  }
}



 




export default App;