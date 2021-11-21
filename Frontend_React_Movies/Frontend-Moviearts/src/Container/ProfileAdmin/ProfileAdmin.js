// import { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import UsersList from "../Components/UsersList/UsersList";
import RentalList from "../Components/RentalsList/RentalsList";
import Button from "../Components/Button/Button";
import './ProfileAdmin.scss'

const ProfileAdmin = () => {

    // const [CreateUser, setCreateUser] = useEffect(true)
    // const [ListUsers, setListUser] = useEffect(false)

    const handLechangeenvets = () => {

    }

    return (
        <>
            <nav className="Navegador">
                <div class="nav-wrapper">
                    {/* <a href="#" class="brand-logo">Logo</a> */}
                    <ul className=" ul">
                        <li >
                            <Button>Create Admin</Button>
                        </li>
                        <li >
                            <Button >List Users</Button>
                        </li>
                        <li >
                            <Button >List Rentals</Button>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <div><UsersList /></div> */}
            <div><RentalList /></div>


        </>
    )
}

export default ProfileAdmin