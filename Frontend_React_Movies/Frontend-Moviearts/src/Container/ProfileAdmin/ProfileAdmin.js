import { useState} from "react";
import UsersList from "../Components/UsersList/UsersList";
import RentalList from "../Components/RentalsList/RentalsList";
import Button from "../Components/Button/Button";
import  Logo from "../Components/Logo/Logo"
import './ProfileAdmin.scss'

const ProfileAdmin = () => {

    const [ListRentals, setListRentals] = useState(false)
    const [ListUsers, setListUser] = useState(false)

    const showlistUser = () => {
        setListRentals(false)
        setListUser(true)
    }
    const showlistRentals = () => {
        console.log('entró')
        setListRentals(true)
        setListUser(false)
    }

    return (
        <>
            <nav className="Navegador">
               
                <div class="nav-wrapper">
                <Logo/>
                    <ul className=" ul">
                        <li >
                            <Button onClick={() => showlistUser()}>List Users</Button>
                        </li>
                        {/* {/* <li >
                            <Button onClick={() => showlistUser()}>List Users</Button>
                        </li> */}
                        <li >
                            <Button onClick={() => showlistUser()}>List Users</Button>
                        </li> 
                        <li >
                            <Button onClick={() => showlistRentals()}>List Rentals</Button>
                        </li>
                    </ul>
                </div>
            </nav>
            {ListUsers && <div><UsersList /></div> }
            {ListRentals && <div><RentalList /></div>}
        </>
    )
}

export default ProfileAdmin