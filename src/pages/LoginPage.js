import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";


export function LoginPage(props){

    const [body, setBody] = useState({email: "", password: ""});
    const [errorMessage, setErrorMessage] = useState(undefined);

    const {storeToken, authenticateUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBody((prevBody) => ({...prevBody, [name]: value}));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/auth/login`, body)
        .then((response) => {
            console.log(response.data.authToken)
            storeToken(response.data.authToken)
            authenticateUser();
            navigate("/")
        })
        .catch((error) => {
            const errorDescription = error.response.data.errorMessage;
            setErrorMessage(errorMessage);
        })
    }

    return(
        <div className="container-fluid">
        <div className="container d-flex flex-column align-items-center">
            <form onSubmit={handleFormSubmit} className="w-500 text-center">
                <label htmlFor="email">Email:</label>
                <input onChange={handleInputChange} type="email" name="email" id="email" className="form-control" />
                <label htmlFor="password">Password:</label>
                <input  onChange={handleInputChange} type="password" name="password" id="password" className="form-control" />
                <div >
                <button type="submit" className="btn btn-primary my-3">Login</button>
                </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    </div>
    );
}