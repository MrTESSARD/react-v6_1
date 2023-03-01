import React, { Component } from 'react'
import handleClicks from './components/handleClicks'

import frieza from './Frieza.png'


 class Frieza extends Component {


    render() {
        
        const {background, clickHandler} = this.props
        return (
            <div className={`col ${background}`}>

               <img onClick={clickHandler} src={frieza} alt="frieza"/><br/>


            </div>
        )
    }
}

export default handleClicks(Frieza)