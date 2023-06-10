import { Link } from "react-router-dom";

export function Navbar(){
    return(
      <div className="container-fluid bg-dark">
      <div className="container">
      <nav className="navbar navbar-expand">
      <a href="" className="navbar-brand fs-3 fwb-old text-white">Projects</a>
      <div className="collapse navbar-collapse justify-content-end d-flex">
      <div className="navbar-nav gap-4">
        <Link to="/">
            <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/projects">
            <button className="btn btn-primary">Projects</button>
        </Link>
        </div>
        </div>
      </nav>
      </div>
      </div>
    );
}