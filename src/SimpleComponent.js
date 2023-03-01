import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"Toto",
           step:1
        }
        // console.log( "Je suis dans le constructor enfant")
      }
      componentDidMount() { 
        // console.log( "Je suis dans le componentDidMount enfant")

       }
  render() {
    console.log("%c render() du Composant simple ", "color:blue;")
    return (
      <div>
<p>
      <span className="blue">
        {/* {console.log( "Mise à jour DOM enfant")} */}
        Simple Component : </span>
        {this.props.name}

</p>
  

      </div>
    )
  }
}

export default ChildComponent