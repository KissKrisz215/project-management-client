import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

export function AddTask({project, getProject}){
    const {id} = useParams();
    const [body,setBody] = useState({title: "", description: "", projectId: project._id});

    useEffect(() => {
      
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/api/tasks`, body)
        .then((response) => getProject())
        .catch(err => console.log(err));
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBody((prevBody) => ({...prevBody, [name]: value}))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className="fw-bold fs-5">Title:</label>
                <input onChange={(e) => handleInputChange(e)} name="title" value={body.title} type="text" className="form-control" />
                <label htmlFor="" className="fw-bold fs-5">Description:</label>
                <input onChange={(e) => handleInputChange(e)} type="text" value={body.description} className="form-control" name="description" />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}