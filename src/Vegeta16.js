import React, { Component } from 'react'
import handleClicks from './components/handleClicks'

import vegeta from './Vegeta.png'


 class Vegeta extends Component {

    render() {

        const {backGround, clickHandler} = this.props
        return (
            <div className={`col ${backGround}`}>

               <img onClick={clickHandler} src={vegeta} alt="vegeta"/><br/>


            </div>
        )
    }
}

export default handleClicks(Vegeta)