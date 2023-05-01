import {useContext} from "react"
import {AuthContext} from "./context/AuthStateContext";
import {HomePage} from "./components/HomePage/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import {AuthPage} from "./components/AuthPage/AuthPage";
import {Route, Routes} from "react-router";
import {Details} from "./components/Details/Details";

const App = () => {
    const {status, userId} = useContext(AuthContext)

    if (status === 'checking') return <p className="loading"><span>Checking credentials, wait a moment...</span></p>

    return (
        <main className='container'>
            <div className='row d-flex justify-content-center'><h1 className='text-center'>Weather App</h1></div>
            <Routes>
            {
                (status === 'authenticated' && userId)
                    ? <Route path="/" element={<HomePage/>}></Route>
                    : <Route path="/" element={<AuthPage/>}></Route>
            }
                <Route path ="/details/" element={<Details/>}></Route>
                </Routes>
        </main>
    )
}
export default App

