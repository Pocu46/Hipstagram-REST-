import { NavLink } from "react-router-dom";
import "./navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages">Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news">News</NavLink>
            </div>
            <div>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;