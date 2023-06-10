import { Link } from "react-router-dom";

export function ProjectCard({project}){

    const {_id, description, title} = project;

    return(
   <Link className="text-decoration-none text-dark" to={`/projects/${_id}`}>
    <h2>{title}</h2>
    </Link>
    );
}