import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export function EditProjectPage(){
    const {id} = useParams();
    const [body,setBody] = useState({title: "", description: ""});
    const storedToken = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        axios(`${API_URL}/api/projects/${id}`, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
            setBody({
                title: response.data.title,
                description: response.data.description
            })
        })
        .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/api/projects/${id}`, body, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
            const data = response.data;
            setBody({
                title: data.title,
                description: data.description
            })
            navigate("/projects")
        })
        .catch((err) => console.log(err));
    }

    const handleInputChange = (e) => {
        const {value, name} = e.target;
        setBody((prevBody) => ({...prevBody, [name]: value}))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className="fw-bold fs-5">Title:</label>
                <input onChange={(e) => handleInputChange(e)} name="title" value={body.title} type="text" className="form-control" />
                <label htmlFor="" className="fw-bold fs-5">Description:</label>
                <input onChange={(e) => handleInputChange(e)} type="text" value={body.description} className="form-control" name="description" />
                <button type="submit" className="btn btn-primary">Change Project</button>
            </form>
        </>
    );
}