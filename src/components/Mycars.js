import { Component, Fragment } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {
    state={
        voitures:[
            {name: "Ford", color: "red", year:2022},
            {name: "Mercedes", color: "black", year:2021},
            {name: "Peugeot", color: "green", year:2020}
        ],
        titre: 'Mon Catalogue Voitures 2'

    }

    AddTenYears=()=>{

        const updatedState=this.state.voitures.map((param)=>{

            return param.year-=10;
        })

        this.setState({
            updatedState
        }
        )
    }
    getAge = year =>{ //si on a juste un argument on peut supprimer les parenteises
const now = new Date().getFullYear();
const age = now - year;
console.log(year)
//ans, an,

let frenchYearStr;
if (age===1) {
    frenchYearStr =" an";

    
}else if (age===0){
    frenchYearStr="";

}else{
    frenchYearStr =" ans";
}
return `${age} ${frenchYearStr}` ;

    }
    render() {
        const year = new Date().getFullYear();
        const [ford, mercedes, peugeot] = this.state.voitures;

        return (
            <>
                <h1>{this.state.titre}</h1>
                <button onClick={this.AddTenYears}>+ 10 ans</button>

                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>

                {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + " ans"}>{this.state.voitures[0].name}</Car>
                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + " ans"}>{this.state.voitures[1].name}</Car>
                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year +  " ans"}>{this.state.voitures[2].name}</Car> */}

                {/* //destrecturing */}
                {/* <Car 
                        nom={ford.name} 
                        color={ford.color} 
                        year={ford.year}
                        />
                        <Car 
                        nom={mercedes.name} 
                        color={mercedes.color} 
                        year={mercedes.year}/>
                        <Car 
                        nom={peugeot.name} 
                        color={peugeot.color} 
                        year={peugeot.year}/> */}


                {
                    //avec state et map
                    this.state.voitures.map(({ name, color, year }, index) => {

                        return (
                            <Fragment key={index}>


                                {/* avec props  */}
                                <Car
                                    nom={name}
                                    color={color}
                                    // year={year - year + " ans"}>
                                    year={this.getAge(year)}>

                                    {name}
                                </Car>
                                <Welcome/>



                            </Fragment>
                        )
                    })
                }
                </table>
            </>

        )
    }
}

export default Mycars