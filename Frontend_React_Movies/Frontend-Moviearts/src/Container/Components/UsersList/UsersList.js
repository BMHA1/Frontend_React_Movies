import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import Loading from "../Loading/Loading.gif"
import UserCard from '../../Components/UserCard/UserCard'
// import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom'

import './UserList.scss'

const UsersList = () => {
    let navigate = useNavigate()
   
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getUsers = () => {
        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllUsers()
                console.log(resul)
                setUsers(resul)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(true)
                setLoading(false)
            }
        }, 5000)
    }

    useEffect(() => {
        getUsers()
    }, [])
    // const DeleteUser = () => {

    // }
    const updateUser = (id, name, role, email) => {
        console.log('estoy en updateuser')
        console.log(id)
        let userModify = {
            _id: id,
            _name: name,
            _role: role,
            _email: email
        }
        console.log(userModify)
        localStorage.setItem( "dataUser",  JSON.stringify(userModify) )
        navigate('/modifyuser')
    }
    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {/* {loading && <Loading/>} */}
            <div className="usersList">
                {users.map((user) => {
                    return (
                        <button onClick={(e) => updateUser(user._id, user.name, user.role, user.email)}>
                            <UserCard
                                // buton={<Button className='boton-delete' onClick={() => DeleteUser(user._id)}>x</Button>}
                                id={user._id}
                                name={user.name} surname={user.surname}
                                role={user.role}
                                email={user.email} />
                        </button>
                    )
                })}
            </div>
        </>
    )
}
export default UsersList