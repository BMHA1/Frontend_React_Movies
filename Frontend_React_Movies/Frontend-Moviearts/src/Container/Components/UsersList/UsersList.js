import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import UserCard from '../userCard/UserCard'
const UsersList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState([false])

    const getUsers = () => {

        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllMovies()
                resul = await resul.json()
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
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            {users.map((data) => {
                return (
                    <>
                        <UserCard name={data.name} />
                        <UserCard surname={data.surname} />
                        <UserCard surname={data.email} />
                    </>
                )
            })}
        </>
    )

} 
export default UsersList