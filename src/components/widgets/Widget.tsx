import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import {useTypedDispatch} from "../../helpers/useTypedDispatch";
import {ActionText} from "../../constants/text";
import {useNavigate} from "react-router";
import {getCity} from "../../store/action";
import {TOAST_TIMER} from "../../constants/numbers";

export const Widget = ({ city }) => {
    const dispatch = useTypedDispatch()
    const {name,day,time,weather,main} = city
    const handleRemove = ({id, name}) => {
        dispatch({
            type: ActionText.REMOVE_CITY,
            payload: id
        })
        toast.success(`${name} was removed!`, {autoClose: TOAST_TIMER})
    }
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details`, { state: { city }, });

    };

    function refreshCity({name}) {
       dispatch(getCity(name , ActionText.UPDATE_CITY ))
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
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-subtitle text-muted lead">{day} {time}</h5>
                    <h5 className="card-subtitle text-muted lead">{weather[0].description}</h5>
                    <img className="" src={"http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"}
                         alt="weather icon" style={{width: "100px", float: "right"}}/>
                    <div className="pt-3">
                        <p className="card-text display-6 mb-3">{main.temp}°C</p>
                    </div>
                    <button  type="button" className="btn btn-dark mt-3" onClick={handleClick}>See Details</button>
                </div>
            </div>
        </div>
    )
}
