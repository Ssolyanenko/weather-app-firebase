import React, {useState} from "react";

interface FormProps {
    handleAddCity: (cityName: string) => void;
}

export const Form = ({handleAddCity}: FormProps) => {
    const [city, setCity] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleAddCity(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-5 container-fluid">
                <div className="input-group w-sm-25 mx-auto">
                    <input className="form-control" type="text" name="cityName" id="city" placeholder="City name"
                           autoComplete="off" value={city} onChange={(event) => setCity(event.target.value)}/>
                    <button
                        type='submit'
                        className="btn btn-dark"
                    >Add
                    </button>
                </div>
            </div>
        </form>
    )
}
