import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

export function TasksDetailsPage(){

    const {id} = useParams();
    const [task,setTask] = useState({title: "", description: "", isDone: null});
    const navigate = useNavigate();
    console.log(task)

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        axios(`${API_URL}/api/tasks/${id}`)
        .then((response) => {
          const  {title, description, isDone} = response.data;
            setTask({
                title,
                description,
                isDone
            })
        })
        .catch((err) => console.log(err));
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/api/tasks/${id}`, task)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    }

    const handleInputChange = (e) => {
        const {value, name} = e.target;
        setTask((prevTask) => ({...prevTask, [name] : value}));
    }

    const toggleDone = () => {
        setTask((prevTask) => ({ ...prevTask, isDone: !prevTask.isDone }));
      };
    
    const deleteTask = () => {
        axios.delete(`${API_URL}/api/tasks/${id}`)
        .then((response) => navigate(`/projects/`))
        .catch((err) => console.log(err));
    }

    return(
       <div className="container">
        <form onSubmit={handleSubmit} className="w-500 d-flex flex-column">
            <label htmlFor="">Title:</label>
            <input onChange={handleInputChange} type="text" name="title" value={task.title} />
            <label htmlFor="">Description:</label>
            <input onChange={handleInputChange} type="text" name="description" id="" value={task.description} />
            <div className="text-center my-2">
            {task.isDone ? <button onClick={toggleDone} className="btn btn-success">Mark Done</button> : <button onClick={toggleDone} className="btn btn-danger">Mark Undone</button>}
            </div>
            <div className="text-center my-2">
            <button type="submit" className="btn btn-primary ">Change Task</button>
            </div>
        </form>
        <div className="w-500 text-center">
        <button onClick={deleteTask} className="btn btn-danger px-4">Delete</button>
        </div>
       </div>
    );
}