import { NavLink } from "react-router-dom";
import './ProfileAdmin.css'
const ProfileAdmin = () => {

    return (
        <nav className="Navegador">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul className =" ul">
                    <li >
                        <NavLink to="/">Register Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/listUser">List users</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default ProfileAdmin