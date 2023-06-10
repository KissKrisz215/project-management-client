import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AddTask } from "../components/AddTask";

const API_URL = "http://localhost:5005";

export function ProjectDetailsPage(){
    const {id} = useParams();
    const [project,setProject] = useState(null);
    const navigate = useNavigate();

    const getProject = () => {
        axios(`${API_URL}/api/projects/${id}`)
        .then((response) => setProject(response.data))
        .catch((err) => console.log(err));
    }

    const deleteProject = () => {
        axios.delete(`${API_URL}/api/projects/${id}`)
        .then((response) => navigate("/projects"))
        .catch((err) => console.log(err))
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
       {project && <AddTask project={project} getProject={getProject} />}
       <h1>Tasks:</h1>
       {project && project.tasks.map((task) => (
        <li key={task._id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </li>
       ))}
       <Link to="/projects"><button>Back to Projects</button></Link>
       <Link to={`/projects/edit/${id}`}><button>Edit Project</button></Link>
       <button onClick={deleteProject}>Delete Project</button>
       </div>
    );
}