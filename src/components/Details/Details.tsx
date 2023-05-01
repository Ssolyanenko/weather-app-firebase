import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {logoutFirebase} from "../../firebase/providers";
import {useLocation, useNavigate, useParams} from "react-router";
import {useTypedDispatch} from "../../helpers/useTypedDispatch";

export const Details = () => {
    const location = useLocation();
    const data = location.state.city;



    return (
        <>
            <div className id={"collapseExample" + data.index} style={{whiteSpace: "nowrap"}}>
                <p className="card-text">Feels like: {data.main.feels_like}°C</p>
                <p className="card-text">Humidity: {data.main.humidity}%</p>
                <br/>
                <p className="card-text">Pressure: {data.main.pressure} hPa</p>
                <p className="card-text">Wind: {data.wind.speed} km/h - {data.wind.deg}°</p>
            </div>
        </>
    )
}