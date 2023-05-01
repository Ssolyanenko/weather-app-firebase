import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import {useTypedDispatch} from "../../helpers/useTypedDispatch";
import {ActionText} from "../../constants/text";

import {Link, NavLink} from "react-router-dom";
import {Details} from "../Details/Details";
import {useNavigate} from "react-router";
import {getCity, updateCity} from "../../store/action";


export const Widget = ({city, id}) => {
    const dispatch = useTypedDispatch()
    const handleRemove = ({id, name}) => {
        dispatch({
            type: ActionText.REMOVE_CITY,
            payload: id
        })
        toast.success(`${name} was removed!`, {autoClose: 1000})
    }
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/details", {state: {city}});
    };

    function refreshCity({name}) {
        dispatch(getCity(name, ActionText.UPDATE_CITY))
    }

    return (
        <div className="col-sm-6 col-md-4 col-xl-3 px-4">
            <div className="card mb-5">
                <div className="card-body">

                    <button className="close-button btn btn-danger rounded-circle p-2 tt" onClick={() => {
                        handleRemove(city)
                    }}><span className="tttext bg-dark">Close widget</span>
                    </button>

                    <button className="refresh-button btn btn-warning rounded-circle p-2 tt" onClick={() => {
                        refreshCity(city)
                    }}><span
                        className="tttext bg-dark">Refresh widget</span>
                    </button>
                    {/*<button className="button btn btn-info rounded-circle p-2 tt"><span className="tttext bg-dark">See more details</span>*/}
                    {/*</button>*/}

                    <h4 className="card-title">{city.name}</h4>
                    <h5 className="card-subtitle text-muted lead">{city.day} {city.time}</h5>
                    <h5 className="card-subtitle text-muted lead">{city.weather[0].description}</h5>
                    <img className="" src={"http://openweathermap.org/img/wn/" + city.weather[0].icon + "@2x.png"}
                         alt="weather icon" style={{width: "100px", float: "right"}}/>
                    <div className="pt-3">
                        <p className="card-text display-6 mb-3">{city.main.temp}°C</p>
                    </div>
                    <button type="button" className="btn btn-dark mt-3" onClick={handleClick}>See Details</button>
                </div>
            </div>
        </div>
    )
}
