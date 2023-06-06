import { Link } from "react-router-dom";

export function Navbar(){
    return(
      <nav>
        <Link to="/">
            <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/projects">
            <button className="btn btn-primary">Projects</button>
        </Link>
      </nav>
    );
}