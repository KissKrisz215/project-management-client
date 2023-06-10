import { Link } from "react-router-dom";

export function TaskCard({task}){

    const {title, description, _id} = task;

    return(
        <Link to={`/tasks/${_id}`} className="text-decoration-none text-dark">
        <div className="border w-500 my-2">
            <h2>{title}</h2>
            <p>{description}</p>   
            </div>
            </Link>
    );
}