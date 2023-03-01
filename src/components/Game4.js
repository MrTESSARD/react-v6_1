import React, { Component } from "react";
import Btn from "./CustomBtn";
class Result extends Component {
state = {
name: "Mario",
winner: false
}
changeStatus =()=>this.setState({winner: !this.state.winner})
render(){//methode render
    // const result = this.state.winner ? `Bravo ${this.state.name}` : "Raté! ";
    const classColor = this.state.winner ? "alert-success" : "alert alert-danger ";


    const success = {
        backgroundColor:"green",
        color:"back"
    }
    const danger = {
        backgroundColor:"red",
        borderRadius: '20px'
    }
return(
<div className="container">
        <div className={`alert ${classColor}`} role="alert">
        {this.state.winner ? `Bravo ${this.state.name}` : "Raté! "}
        </div>
    {/* <button 
    onClick={this.changeStatus}
        className= "btn btn-primary">Changer status
        </button> */}


    <Btn 
    handleClick={this.changeStatus}
    onClick={this.changeStatus}
    btnStyle={success}>Changer status</Btn>
    {/* <Btn btnStyle={danger}>danger</Btn> */}
    {/* <Btn btnStyle={{backgroundColor:"blue"}}>blue</Btn> */}

</div>

)

    




}
}
export default Result;