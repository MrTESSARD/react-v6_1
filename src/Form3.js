import React, {Component} from "react";
import styled  from "styled-components";

const Title=styled.h1`
color:red;
font-size:80px;
`

const Button=styled.button`
background: black;
color:white;
padding: 12px 13px;
font-size: 15px;
`
// const titreRouge ={ // inline CSS
//    fontSize:"50px",
//    color:"red"

// }
class Form extends Component{//destructuring au niveau des paramètres

    render(){
        // const myClass = this.props.head ? "blue":"red";


        return(
            <div>
                <Title  >Commentaire 1</Title>

               {/* <button className="btn btn-danger ">Valider</button>  bootstrap*/}
               <button className="btn btn-danger ">Valider</button>
               <Button className="btn btn-danger ">Valider</Button>
            </div>
        )

    }


   
}
export default Form;