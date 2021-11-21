import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import UserCard from '../../Components/UserCard/UserCard'
import './UserList.scss'

const UsersList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState(false)

    const getUsers = () => {
        console.log('hola')
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

    return (
        <>

            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <div className="usersList">
                {users.map((user) => {
                    return (
                        <UserCard
                            id={user._id}
                            name={user.name} surname={user.surname}
                            role={user.role}
                            email={user.email} />
                    )
                })}
            </div>
        </>
    )

}
export default UsersList