import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import UserCard from '../UserCard/UserCard'
const UsersList = () => {

    const [users, setUsers] = useEffect([])
    const [loading, setLoading] = useEffect([true])
    const [error, setError] = useEffect([false])

    const getUsers = () => {

        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllMovies()
                resul = await resul.json()
                setUsers(resul.json)
                setLoading(false)
            } catch (error) {
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
                        <UserCard surname={data.surname} />
                    </>
                )
            })}
        </>
    )

} 
export default UsersList