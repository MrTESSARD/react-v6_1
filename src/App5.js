// import React  from 'react';

import Template from "./components/Template";
import Welcome from "./components/Welcome";
import Buttons from "./components/Buttons";

// import Form from './Form';
// import Result from './components/Game';
// import './App.css';
// import Btn from'./components/CustomBtn';

function App()  {

const sayHallo=()=>alert("Hello World");


    return (
      <>
      <Template/>
<Welcome />
<Buttons/>
      </>
      
    )
    }

export default App;