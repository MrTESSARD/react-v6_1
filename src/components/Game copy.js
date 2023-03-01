import React, { Component } from "react";
class Result extends Component {
state = {
name: "Mario",
winner: false
}
render(){//methode render
//     let result;


// if (this.state.winner) {
//     result= <h1> Salut {this.state.name}</h1>
 
// }else{
//     result=  <h1> Raté</h1>
    

// }
// return   result

//methode 2
return  this.state.winner ?  
<h1> Salut {this.state.name}</h1> : ""
{/* <h1> Raté</h1> */}

//methode 3
return  this.state.winner &&  <h1> Salut {this.state.name}</h1> 
{/* <h1> Raté</h1> */}

    




}
}
export default Result;