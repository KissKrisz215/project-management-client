import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddProject } from "../components/AddProject";

const API_URL = "http://localhost:5005";

export function ProjectListPage(){

    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
        axios.get(`${API_URL}/api/projects`)
        .then((response) => setProjects(response.data))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllProjects();
    }, []);

    return(
     <div className="ProjectListPage">
     <AddProject getAllProjects={getAllProjects} />
        {projects.map((project) => {
            return(
                    <Link key={project._id} className="text-decoration-none text-dark" to={`/projects/${project._id}`}>
                    <h2>{project.title}</h2>
                    </Link>
            );
        })}
     </div>
    );
}