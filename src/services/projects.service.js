import axios from "axios";

class ProjectsService{
    constructor(){
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'
        })

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');

            if(storedToken){
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        })
    }

    createProject = (requestBody) => {
        return this.api.post('/api/projects', requestBody);
    }

    getAllProjects = (requestBody) => {
        return this.api.get('/api/projects');
    }

    getProject = (id) => {
        return this.api.get(`/api/projects/${id}`);
    }

    updateProjects = (id, requestBody) => {
        return this.api.put(`/api/projects/${id}`, requestBody);
    }

    deleteProject = (id) => {
        return this.api.delete(`/api/projects/${id}`);
    }
}

const projectsService = new ProjectsService();

export default projectsService;