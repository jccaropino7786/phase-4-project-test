import { Link } from "react-router-dom";

function NavBar(){
    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="/log_in">Log In</Link></li>
                <li><Link to="/new_user">Home</Link></li>
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="materials">Materials</Link></li>
                <li><Link to="new_project">New Project</Link></li>
            </ul>
        </div>
    )
}

export default NavBar