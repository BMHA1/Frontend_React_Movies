// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { APIConsumer } from '../../services/APIConsumer';
import Button from '../Components/Button/Button';




const CreateUser = () => {

    // const [msgValidation, SetgValidation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



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
            } catch (error) {
                alert(error)
                setError(true)
                setLoading(false)
            }
        }, 5000);

    }


    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <form onSubmit={(d) => HandelChangeSend(d)} >
                <fieldset>
                    <legend>Por Favor Rellene todos los campos</legend>
                    <div>
                        <div>
                            <label>
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
                </fieldset>
            </form>
        </>
    )

}

export default CreateUser