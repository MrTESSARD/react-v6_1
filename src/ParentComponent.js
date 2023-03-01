import React, { Component } from 'react'
import PureComp from "./PureComponent";
import SimpleComp from "./SimpleComponent";
import  FunctionComp from "./FunctionCompPure";

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Spiderman"
    }

  }
  static getDerivedStateFromProps(props, state) {
    // console.log("%c getDerivedStateFromProps lancée", "color:red; background: yellow; font-size: 25px")
    // console.log(props)
    // console.log(state)
    return null

  }
  forcerChangement = () => {
    this.forceUpdate(() => {
      // console.log("Je force le chargement")
    })

  }
  shouldComponentUpdate(nextProps, nextState) { //sert à mettre à jor les données sans refraisissement 
    // console.log("Je suis dans shouldComponentUpdate()")
    // console.log(this.state.name)
    // console.log(this.nextState)

    if (this.state.name !== nextState.name) {
      return true //true on entre dans render

    }
    return true //true on entre dans render

  }
  changeToBatman=()=>{
    this.setState({
        name:"Batman"
    })
  }

  render() {
    console.log("%c render() du Composant Parent ", "color:red;")
    return (
      <div>
        <p>
          <span className="red">
            Parent Component : 
          </span>
          {this.state.name}
        </p>
        <SimpleComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <FunctionComp name={this.state.name}/>

        <button onClick={this.changeToBatman}>Set Batman</button>

      </div>
    )
  }
}

export default ParentComponent