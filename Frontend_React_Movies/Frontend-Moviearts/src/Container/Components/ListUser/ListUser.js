import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../services/APIConsumer';

const UserList = () => {

    const [users, setUsers] = useEffect([])
    const [loading, setLoading] = useEffect([true])
    const [error, setError] = useEffect([false])

    const getUsers = () => {

        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllMovies
                res=await resul.json()
            } catch (error) {

            }
        })


    }
    return (

        <>
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