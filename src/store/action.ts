import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {API_BASE, API_KEY} from "../constants/weather"
import {TOAST_TIMER} from "../constants/numbers";

export const getCity = (cityName:string, actionText:string) => {
    return (dispatch) => {
        const url = `${API_BASE}${cityName}&appid=${API_KEY}&units=metric`;

        axios.get(url)
            .then(function (response) {
                const {data} = response;
                data.main.temp = Math.round(data.main.temp)
                const today = new Date();
                const hour = function () {
                    const hr = today.getUTCHours() + (data.timezone / 3600);
                    return ((hr < 10) ? "0" + hr : hr);
                }
                const minutes = function () {
                    return ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes());
                }
                data.time = hour() + ":" + minutes();
                data.day = today.toLocaleDateString("en-US", {weekday: "long"});
                dispatch({
                    type: actionText,
                    payload: data
                });
                toast.info(`${data.name} was updated!`, {autoClose: TOAST_TIMER})
            })
            .catch(function (error) {
                toast.error("Oh-oh, this city does not exist!");
            })
    }
};
