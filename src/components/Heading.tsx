import React, {FC} from "react";
import {Weather} from "../constants/text";

export const Heading: FC = () => {
    return (
        <div className="px-5 pt-5 text-center">
            <h1 className="display-5">{Weather.WEATHER_WIDGETS}</h1>
            <p className="lead">{Weather.ENTER_CITY_NAME}</p>
        </div>
    )
}

