import React, { Component } from 'react';
// import Mycars from './components/Mycars';
// import Display from './components/Display';
// import Result from './components/Game';
import Form from './Form';
import './App.css';

class App extends Component {

  state = {
  }

  render() {
    return (
      <div className='App'>
        {/* <Display /> */}
        {/* <Result /> */}
        <Form />
      </div>
    )
  }
}

export default App;