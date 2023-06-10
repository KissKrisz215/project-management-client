import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {
        const token = localStorage.getItem("authToken");

        if(token){
            axios.get(`${API_URL}/auth/verify`, {
                headers: { Authorization: `Bearer ${token}`}
            })
            .then((response) => {
                const data = response.data;
                setUser(data);
                setIsLoading(false);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                setIsLoggedIn(false);
                setIsLoading(false);
                setUser(null);      
            })

        }else{
            setIsLoading(false);
            setIsLoggedIn(false);
            setUser(null);
        }

    }

    const removeToken = () => {
        localStorage.removeItem("authToken");
    }
    
    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }

    useEffect(() => {
        authenticateUser();
    }, [])

    return(
        <AuthContext.Provider value={{isLoading, isLoggedIn, user, storeToken, authenticateUser,logOutUser}}>
        {props.children}
        </AuthContext.Provider>
    )

}

export { AuthProviderWrapper, AuthContext };