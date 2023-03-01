import React, {Component}  from 'react';
import Modal from './Modal';
import './App.css';


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       showModal:false
    }
  }
  handeleShow= () => {
    this.setState({
      showModal:true
    })

  }
  handeleHide= () => {
    this.setState({
      showModal:false
    })

  }

  render(){
    // const modal = this.state.showModal? (<Modal />): null // c'est la même chose
    const modal = this.state.showModal&& (<Modal close={this.handeleHide}/>)

    return(
      <div className='App'>
        <button onClick={this.handeleShow}>Afficher le Modal</button>
        
        {modal}
  
  
  
      </div>
    )
  } 

  }
  


 




export default App;