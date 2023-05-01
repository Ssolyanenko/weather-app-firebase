import {useForm} from "../../helpers/useForm";
import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthStateContext";

export const Login = () => {

    const {handleLoginWithGoogle, handleLoginWithCredentials} = useContext(AuthContext)

    const {handleChange, pass, email} = useForm({
        initialState: {
            email: 'test@test1.com',
            pass: '123456'
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleLoginWithCredentials(pass, email)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">

                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label fs-4 fw-bold">Login</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control mb-4"
                                placeholder="E-mail"
                                onChange={handleChange}
                                value={email}
                            />
                            <input
                                name="pass"
                                type="password"
                                className="form-control mb-4"
                                placeholder="Password"
                                onChange={handleChange}
                                value={pass}
                            />

                            <div className='mb-5'>
                                <button className="btn btn-primary me-4" type="submit">Log In</button>
                                <button className="btn btn-primary" type="button"
                                        onClick={handleLoginWithGoogle}> Google
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}