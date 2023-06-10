import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const API_URL = "http://localhost:5005";

export function SignUpPage(){

    const [body, setBody] = useState({email: "", password: "", name: ""});
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBody((prevBody) => ({...prevBody, [name] : value}));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/auth/signup`, body)
        .then((response) => navigate("/login"))
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        });
    }

    return(
        <div className="container-fluid">
            <div className="container d-flex flex-column align-items-center">
                <form onSubmit={handleFormSubmit} className="w-500 text-center">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleInputChange} type="email" name="email" id="email" className="form-control" />
                    <label htmlFor="password">Password:</label>
                    <input  onChange={handleInputChange} type="password" name="password" id="password" className="form-control" />
                    <label htmlFor="name">Name:</label>
                    <input  onChange={handleInputChange} type="name" name="name" id="name" className="form-control" />
                    <div >
                    <button type="submit" className="btn btn-primary my-3">Create User</button>
                    </div>
                </form>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
}