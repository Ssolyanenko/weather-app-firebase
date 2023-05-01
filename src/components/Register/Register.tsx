import {AuthContext} from "../../context/AuthStateContext";
import {useContext} from "react";
import {useForm} from "../../helpers/useForm";


export const Register = () => {

    const {handleRegisterWithCredentials} = useContext(AuthContext)

    const {handleChange, pass, email} = useForm({
        initialState: {
            email: 'test@test2.com',
            pass: '123456'
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleRegisterWithCredentials(pass, email)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label fs-4 fw-bold">Create an account</label>
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
                        <button className='btn btn-primary' type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}