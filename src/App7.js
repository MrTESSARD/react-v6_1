import React  from 'react';
import  { Container, Button } from "react-bootstrap";

import Form from './Form';
import Result from './components/Game';
// import './App.css';
// import Btn from'./components/CustomBtn';

function App()  {
  const customBtn ={
    backgroundColor:'yellow',
    border: "none",
    color : "black",
    fontSize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block",
    margin: "5px auto"


}

const sayHallo=()=>alert("Hello World");


    return (
      <Container>
        {/* head- props */}
        

        <Result head={false}/>
        {/* <Btn 
        handleClick={sayHallo}
        // onClick={sayHallo}
        btnStyle={{backgroundColor:"yellow", color:"blue"}}>Say Hello</Btn> */}
        <Button
        variant="warning"
         onClick={sayHallo}
         style={customBtn}
        //  style={{display:"block", margin:"5px auto"}}
         >Say Hello</Button>
      </Container>
    )
  }


export default App;