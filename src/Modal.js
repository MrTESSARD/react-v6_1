import React, {Component} from "react";
import './index.css';
import ReactDOM from "react-dom";


// function Modal(params) {
//   return ReactDOM.createPortal(
//     <div className="modal">
// <div>

// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique veniam? Delectus molestiae pariatur assumenda quis eius modi reprehenderit maiores quas distinctio aperiam. Architecto atque itaque suscipit ipsa exercitationem. Amet.</p>
// <button>Fermer</button>
// </div>
//       <p>Je suis dans route</p>
      
//     </div>,
//     document.getElementById("second-root")
//   )
  
// }

class Modal extends Component{
  constructor(props) {// avec appendChild qui remplace <div id="second-root">
    super(props)
  
    this.popUpContainer = document.createElement("div")
   document.body.appendChild(this.popUpContainer);

  }
  componentWillUnmount(){
    document.body.removeChild(this.popUpContainer);


  }
  render(){

    return ReactDOM.createPortal(
<div className="modal" onClick={this.props.close}>

  
<div>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique veniam? Delectus molestiae pariatur assumenda quis eius modi reprehenderit maiores quas distinctio aperiam. Architecto atque itaque suscipit ipsa exercitationem. Amet.</p>
<button>Fermer</button>
</div>
</div>,
// document.getElementById("second-root")//avec <div id="second-root"></div>
this.popUpContainer//ça remplace // document.getElementById("second-root")//avec <div id="second-root"></div>


    )
  }
}
export default Modal;