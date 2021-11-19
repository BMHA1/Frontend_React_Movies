
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div>
                <ul>
                    {/* <li>
                        <NavLink className="navbar-item" activeClassName="is-active"  to="/register">Sing Up</NavLink>
                    </li> */}
                    <li>
                        <NavLink className="navbar-item" activeClassName="is-active"   to="/login">login</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )

}
export default Header