import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

export function ProjectDetailsPage(){
    const {id} = useParams();
    const [project,setProject] = useState(null);

    const getProject = () => {
        axios(`${API_URL}/api/projects/${id}`)
        .then((response) => setProject(response.data))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getProject();
    }, [])

    return(
       <div>
       {project && (
        <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </>
       )}
       {project && project.tasks.map((task) => (
        <li>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </li>
       ))}
       <Link to="/projects"><button>Back to Projects</button></Link>
       </div>
    );
}