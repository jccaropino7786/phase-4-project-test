import { Link } from "react-router-dom";

function NavBar({currentUser, setCurrentUser}){

    const logout = () => {
        // Simple DELETE request with fetch
        fetch(`/logout`, { method: 'DELETE' })
            .then(() => setCurrentUser())
    }

    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="materials">Materials</Link></li>
                <li><Link to="new_project">New Project</Link></li>
                <li onClick={logout}> Logout {currentUser.email} </li>
            </ul>
        </div>
    )
}

export default NavBar