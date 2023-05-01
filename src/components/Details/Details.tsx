import React from "react";
import {useLocation} from "react-router";

export const Details = () => {
    const location = useLocation();
    const {name,day,time,weather,wind,main} =location.state.city

    return (
             <table className="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Location</th>
                <th>Date & Time</th>
                <th>Weather Description</th>
                <th>Temperature</th>
                <th>Feels Like</th>
                <th>Humidity</th>
                <th>Pressure</th>
                <th>Wind Speed</th>
                <th>Wind Direction</th>
                <th>Weather Icon</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{day} {time}</td>
                <td>{weather.description}</td>
                <td>{main.temp}°C</td>
                <td>{main.feels_like}°C</td>
                <td>{main.humidity}%</td>
                 <td>{main.pressure} hPa</td>
                <td>{wind.speed} km/h</td>
                <td>{wind.deg}°</td>
              <td>
                    <img
                        className="weather-icon"
                        src={
                            "http://openweathermap.org/img/wn/" +
                            weather[0].icon +
                            "@2x.png"
                        }
                        alt="weather icon"
                    />
                </td>
            </tr>
            </tbody>
        </table>

    )
}