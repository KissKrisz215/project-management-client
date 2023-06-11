import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddProject } from "../components/AddProject";
import { ProjectCard } from "../components/ProjectCard";
import projectsService from "../services/projects.service";

const API_URL = "http://localhost:5005";

export function ProjectListPage(){

    const [projects, setProjects] = useState([]);


    const getAllProjects = () => {

        const storedToken = localStorage.getItem("authToken")

        projectsService.getAllProjects()
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