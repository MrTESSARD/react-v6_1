const Car = ({color, nom, year}) => {

    //Destructuring
    var tableau=["tt","rr", "tt"]
    //example1
    var[varone, varTho, varThree]=tableau //tableau

    //example2 tout le rest dans rest
    var[varone, ...rest]=tableau
    console.log(rest)

    var members={ //objet
        userOne:"toto1",
        userTwo: "tata",
        userThree:"titi"
    }
    var memOne=members.userOne;
    var {userOne, userTwo, userThree}=members;//objet
    var {userOne,  rest}=members;//objet
    console.log(rest)

    var {userOne:hulk, userTwo:spiderMan, userThree:superMan}=members;//objet
    console.log(hulk)




    const colorInfo = color ? (`Couleur: ${color}` ): (`Couleur: "Néant"`);

    if (nom) {
        return (
            // style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }
            <tr>
                <td>Marque: { nom }</td>
                <td>Age: { year }</td>
               <td> {colorInfo}</td>
            </tr>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
