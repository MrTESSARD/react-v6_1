import React from "react";


// //function !!!
// const Users =({name,age}) =>{//destructuring au niveau des paramètres
//     // console.log(props.age)
//     // const{name,age}=props; //destructuring


//     return(
//         <div>
//             <p>Chanteur : </p>
//         </div>
//     )
// }

// export default Users;


//class !!! dans une classe on peut pas utiliser props!! juste this.props
class Users extends React.Component{//destructuring au niveau des paramètres
    render(){
        const {name, age}= this.props

        return(
            <div>
                <p>Chanteur : {name}  {age} ans</p>
            </div>
        )

    }


   
}
export default Users;