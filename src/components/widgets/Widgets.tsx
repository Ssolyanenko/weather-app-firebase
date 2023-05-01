import React from "react";
import {Widget} from "./Widget";

export const Widgets = ({cities}) => {

    return(
        <div id="cityCards" className="row container-fluid m-0 mt-5">
            {cities.map((city, index)=> <Widget key={index} index={index} city={city} />)}
        </div>
    )
}
