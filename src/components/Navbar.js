import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export function Navbar(){

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
      <div className="container-fluid bg-dark">
      <div className="container">
      <nav className="navbar navbar-expand">
      <a href="" className="navbar-brand fs-3 fwb-old text-white">Projects</a>
      <div className="collapse navbar-collapse justify-content-end d-flex">
      <div className="navbar-nav gap-4">
      {isLoggedIn && ( <><Link to="/">
          <button className="btn btn-primary">Home</button>
      </Link>
      <Link to="/projects">
          <button className="btn btn-primary">Projects</button>
      </Link>
      <button onClick={logOutUser} className="btn btn-danger">Logout</button>
      </>
      )}
      {!isLoggedIn && <>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
      </Link>
      <Link to="/login">
          <button className="btn btn-primary">Login</button>
      </Link>
      </>}
        </div>
        </div>
      </nav>
      </div>
      </div>
    );
}