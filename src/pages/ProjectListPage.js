import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddProject } from "../components/AddProject";
import { ProjectCard } from "../components/ProjectCard";

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
     <div className="ProjectListPage d-flex flex-column align-items-center">
     <AddProject getAllProjects={getAllProjects} />
        {projects.map((project) => {
            return(
                    <ProjectCard key={project._id} project={project} />
            );
        })}
     </div>
    );
}