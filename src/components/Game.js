import React, { Component } from "react";
import  { Button,Alert } from "react-bootstrap";

import Btn from "./CustomBtn";
class Result extends Component {
state = {
name: "Mario",
winner: false
}
changeStatus =()=>this.setState({winner: !this.state.winner})
render(){//methode render
    // const result = this.state.winner ? `Bravo ${this.state.name}` : "Raté! ";
    const classColor = this.state.winner ? "success" : "danger ";


    const success = {
        backgroundColor:"green",
        color:"back"
    }
    const danger = {
        backgroundColor:"red",
        borderRadius: '20px'
    }
return(
<>
        {/* <div className={`alert ${classColor}`} role="alert">
        {this.state.winner ? `Bravo ${this.state.name}` : "Raté! "}
        </div> */}
    {/* <button 
    onClick={this.changeStatus}
        className= "btn btn-primary">Changer status
        </button> */}
    {/* <div className="text-center"> */}

        <Alert  variant={classColor}
        className='text-center'>
        {this.state.winner ? `Bravo ${this.state.name}` : "Raté! "}
        </Alert>


        <Button
        onClick={this.changeStatus}
        variant="success"
        style={{display:"block", margin:"5px auto"}}
        >Change status</Button>
        {/* </div> */}
{/* 
<Btn 
    handleClick={this.changeStatus}
    onClick={this.changeStatus} 
    btnStyle={success}>Changer status</Btn>*/}
   
    {/* <Btn btnStyle={danger}>danger</Btn> */}
    {/* <Btn btnStyle={{backgroundColor:"blue"}}>blue</Btn> */}

</>

)

    




}
}
export default Result;