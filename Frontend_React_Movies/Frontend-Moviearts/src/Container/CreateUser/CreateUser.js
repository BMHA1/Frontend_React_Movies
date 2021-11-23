// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { APIConsumer } from '../../services/APIConsumer';
import Button from '../Components/Button/Button';
import Logo from '../Components/Logo/Logo';
import Title from '../Components/Title/Tittle'
import './CreateUser.scss'


const CreateUser = () => {

    // const [msgValidation, SetgValidation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()


    const HandelChangeSend = (d) => {
        setLoading(true)
        d.preventDefault()
        const name = d.target.name.value
        const surname = d.target.surname.value
        const email = d.target.email.value
        const password = d.target.password.value
        setTimeout(async () => {

            try {
                let result = await APIConsumer.CreateUser(name, surname, email, password)
                console.log(result)
                setLoading(false)
                navigate('/')
            } catch (error) {
                alert(error)
                setError(true)
                setLoading(false)
            }
        }, 3000);

    }


    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <div className="logo-title">
                <Logo/>
            </div>
            <Title/>            
            <form onSubmit={(d) => HandelChangeSend(d)} className="form">
                    <legend className="legend">Por Favor Rellene todos los campos</legend>
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Name"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder="Escribe aqui tu apellido"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Escribe aqui tu contraseña"
                                    required />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Registrarte</Button>
            </form>
        </>
    )

}

export default CreateUser