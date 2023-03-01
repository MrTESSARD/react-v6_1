import React, {Component} from "react";
import Car from "./Car";
import MyHead from "./myHeaderOne";
import  "./myCss.css";
import styles from "./myCss.module.css"; //styles ne s'aplique aux elements enfants contrairement au css normal 


// const titreRouge ={ // inline CSS
//    fontSize:"50px",
//    color:"red"

// }
class Form extends Component{//destructuring au niveau des paramètres

    render(){
        // const myClass = this.props.head ? "blue":"red";


        return(
            <div>
                <h1 className={styles.green} >Commentaire 1</h1>
                <MyHead/>
               {/* <h1 style={{fontSize : "50px", color:"red"} }>Commentaire</h1>  inline CSS*/}
               {/* <h1 style={titreRouge }>Commentaire</h1>  inline CSS*/}
               {/* <p className={`${myClass} bigFont` }>Je suis rouge ou bleu</p> */}
               <p className="red">Je suis rouge ou bleu</p>
               <button>Valider</button>
            </div>
        )

    }


   
}
export default Form;