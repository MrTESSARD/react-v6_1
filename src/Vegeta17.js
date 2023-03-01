import React, { Component } from 'react'
import handleClicks from './components/handleClicks'

import vegeta from './Vegeta.png'


 class Vegeta extends Component {
   
    render() {
        const {hits, addOne, name} =this.props

        return (
            <div className="col">

                <img src={vegeta} alt="vegeta" /><br />

                {/* //class props */}
                <button onClick={addOne} className="btn btn-success m-3" >{name} Frappe</button>
                <table className="table table-striped">
                    <thead className="table table-striped">
                        <tr>
                            <th scope="col">Coups</th>
                            

                        </tr>


                    </thead>

                    <tbody>
                        <tr>
                            <td>{hits}
                            </td>
                            
                        </tr>
                    </tbody>


                </table>


            </div>
        )
    }
}

export default Vegeta