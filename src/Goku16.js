import React, { Component } from 'react'
import handleClicks from './components/handleClicks'

import goku from './Goku.png'


 class Goku extends Component {


    render() {
      const {backGround, clickHandler} = this.props
        return (
          <div className={`col ${backGround}`}>

               <img onClick={clickHandler} src={goku} alt="goku"/><br/>


            </div>
        )
    }
}

export default handleClicks(Goku)