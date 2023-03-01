import React, {Component} from "react";
import Car from "./Car";

class Form extends Component{//destructuring au niveau des paramètres
    state={
        username:"",
        color:"",
        colors:["", "red", "blue", "green", "black", "pink"],
        comment:""

    }
    handlePseudo=(e)=>{
        // console.log(e)
        this.setState({
           username : e.target.value

        })
    }
    handleColor=(event)=>{
        // console.log(e)
        this.setState({
            color : event.target.value
            
        }
        )
        console.log(event.target.value)


    }
    handleComments=(event)=>{
        // console.log(e)
        this.setState({
            comment : event.target.value
            
        }
        )


    }
    handelSubmitForm=(event)=>{
        event.preventDefault(); //interdire rechargement de la page
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`)
        this.setState({
            comment : event.target.value
            
        }
        )


    }
    render(){

        return(
            <div>
                <Car color={this.state.color} height="400"/>
                <h1>Commentaire</h1>
                Formulaire
                <form onSubmit={this.handelSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                

                    </div>
                    <div>
                    <label>Couleur</label>
                    <select value={this.state.color} onChange={this.handleColor}>
                        {
                            this.state.colors.map((color, index)=>{
                                return <option key={index} value={color}>{color}</option>
                            })

                        }
                        {/* <option value="vert"> Vert</option>
                        <option value="rouge"> Rouge</option>
                        <option value="orange"> Orange</option> */}
                    </select>



                    </div>
                    
                    <div>
                    <label> Commentaire</label>
                    <textarea value={this.state.comment} onChange={this.handleComments}>

                    </textarea>


                    </div>
                    <button>

                    </button>
                    {/* <label>Pseudo</label>
                    <input type="text" value={this.state.username} onChange={this.handlePseudo}/> */}
                </form>
            </div>
        )

    }


   
}
export default Form;