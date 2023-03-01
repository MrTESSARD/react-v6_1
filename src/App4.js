import React  from 'react';

import Form from './Form';
import Result from './components/Game';
import './App.css';
import Btn from'./components/CustomBtn';

function App()  {

const sayHallo=()=>alert("Hello World");


    return (
      <div className='App'>
        {/* head- props */}
        

        <Result head={false}/>
        <Btn 
        handleClick={sayHallo}
        onClick={sayHallo}
        btnStyle={{backgroundColor:"yellow", color:"blue"}}>Say Hello</Btn>
      </div>
    )
  }


export default App;