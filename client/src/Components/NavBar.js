import { Link } from "react-router-dom";

function NavBar({currentUser, setCurrentUser}){

    const logout = () => {
        
        fetch('/logout', { method: 'DELETE' })
            .then(() => setCurrentUser(null))
    }

    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="materials">Materials</Link></li>
                <li><Link to="new_project">New Project</Link></li>

                { currentUser ? (<li onClick={logout}> Logout {currentUser.email} </li>) : (
                    <>
                    <Link to="/login">Login</Link><br/>
                    </>
                    )}

            </ul>
        </div>
    )
}

export default NavBar