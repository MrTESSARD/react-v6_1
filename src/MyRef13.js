import React, { Component } from 'react'

 class MyRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:""
      }
      this.myTitle=React.createRef()//Les refs fournissent un moyen d’accéder aux nœuds du DOM ou éléments React créés dans la méthode de rendu
      console.log(this.myTitle)

      this.myInput=React.createRef()

    }
    
    // update = event => {
    //    this.setState({
    //     value:event.target.value
    //    })
    // }
    // componentDidMount() { 
    //     this.myInput.current.focus() }//focus sur l'objet au chargement de la page !!!!!!
 addFocus =()=>{ 
        this.myInput.current.focus() }//


    
  render() {
    return (
      <div>
        {/* <h1 ref={this.myTitle}>Valeur :{this.state.value} </h1> */}
        {/* <input ref={this.myInput} type="text" value={this.state.value} onChange={this.update}/> */}
        <input ref={this.myInput} type="text" />
        {/* <button onClick={this.handleClick}>Valider</button> */}
        
        
        
        </div>
    )
  }
}
export default MyRef
