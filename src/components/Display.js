import React, {Component} from "react";
import Users from "./Singers";

class Display extends Component{
    render(){

        return(
            <div>
            <h1>Musiciens</h1>
            <Users name="Eric Clapton" age="74" />
            <Users name="Eric 2"  age="25"  />
            <Users name="Eric 3" age="54"  />
            <Users name="Eric 4" age="33"  />
            </div>
        )
    }
}

export default Display;