import React, { Component } from 'react'

 class MyComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:"Spiderman"
       }
       
     }
    static getDerivedStateFromProps(props, state) {
        console.log("%c getDerivedStateFromProps lancée", "color:red; background: yellow; font-size: 25px")
        console.log(props)
        console.log(state)
        return null
        
    }
    forcerChangement =()=>{
        this.forceUpdate(()=>{
            console.log("Je force le chargement")
        })

    }
    shouldComponentUpdate(nextProps, nextState) { //sert à mettre à jor les données sans refraisissement 
        console.log("Je suis dans shouldComponentUpdate()")
        console.log(this.state.name)
        console.log(this.nextState)
        
        if (this.state.name!==nextState.name) {
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
    console.log("Je suis dans le render")
    return (
      <div>
        <p>Name: {this.state.name}
            </p>
        <p>Age: {this.props.age}
            </p>
            
            <button onClick={this.forcerChangement}>Forcer forcerChangement forceUpdate()</button>
            <button onClick={this.changeToBatman}>Set Batman</button>
            On force le changement sans passer par shouldComponentUpdate()
            
            </div>
    )
  }
}

export default MyComponent