import axios from "axios";
import { useState } from "react";

const API_URL = `http://localhost:5005`;

export function AddProject({getAllProjects}){

    const [body,setBody] = useState({title: "", description: ""}) 

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBody((prevBody) => ({...prevBody, [name]: value}));
    }

    const handleSubmit = (e) => {
     e.preventDefault();

        const storedToken = localStorage.getItem("authToken")

     axios.post(`${API_URL}/api/projects`, body, {headers: {Authorization: `Bearer ${storedToken}`}})
     .then(response => {
        setBody({title: "", description: ""})
        getAllProjects();
     })
     .catch(err => console.log("There was an error", err))
    }

    return(
   <div className="d-flex justify-content-center">
    <form onSubmit={handleSubmit} className="d-flex flex-column w-500">
        <label htmlFor="title" className="fw-bold fs-5">Title:</label>
        <input onChange={handleInputChange} type="text" id="title" name="title" value={body.title} required />
        <label htmlFor="description" className="fw-bold fs-5">Description:</label>
        <textarea  onChange={handleInputChange} name="description" id="description" cols="30" rows="10" value={body.description} required></textarea>
        <button type="submit" className="btn btn-primary my-3">Create Project</button>
    </form>
   </div>
    );
}