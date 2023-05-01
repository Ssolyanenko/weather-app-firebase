import {useTypedDispatch} from "../../helpers/useTypedDispatch";
import {useSelector} from "react-redux";
import {addCity} from "../../store/action";
import {useContext, useEffect} from "react";
import {Slide, ToastContainer} from "react-toastify";
import {Heading} from "../Heading";
import {Widgets} from "../widgets/Widgets";
import {Form} from "../Form";
import {AuthContext} from "../../context/AuthStateContext";

export const HomePage = () => {
    const {handleLogOut} = useContext(AuthContext)
    const dispatch = useTypedDispatch();
    const cities = useSelector(state => state.cities);

    const handleAddCity = (cityName: string) => {
        dispatch(addCity(cityName));
    };

    useEffect(() => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        if (cities) {
            dispatch({type: 'ADD_CITIES', payload: cities});
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }, [cities]);

    return (
        <>
            <div>
                <button className="btn btn-info position-absolute top-0 mt-2 ms-5 " onClick={handleLogOut}>Log out</button>
            </div>

            <div>
                <ToastContainer transition={Slide}/>
                {cities.length === 0 ? <Heading/> : <></>}
                <Widgets dispatch={dispatch} cities={cities}/>
                <Form handleAddCity={handleAddCity}/>
            </div>
        </>
    )
}