import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import UserCard from '../../Components/UserCard/UserCard'




const UsersList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState([false])

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
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {console.log(users)}
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            {<h1> list de usuario</h1>}
            {users.map((user) => {
                return (
                    <UserCard name={user.name} email={user.email} email={user.email} />
                )
            })}
        </>
    )

}
export default UsersList