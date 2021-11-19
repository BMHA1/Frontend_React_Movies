// import React, { useState, useEffect } from 'react';
import { APIConsumer } from '../../services/APIConsumer';


const CreateUser = () => {

    console.log("aqui esta")

    const HandelChangeSend = async (d) => {

        d.preventDefault()
        const name = d.target.name.value
        console.log(d.target.name.value)
        const surname = d.target.surname.value
        console.log(d.target.surnaname.value)
        const mail = d.target.mail.value
        const password = d.target.password.value
 
        try {
            let result = await APIConsumer.CreateUser(name, surname, mail, password)
            console.log(result)
            localStorage.setItem("token", result)

        } catch (error) {
            alert(error)
        }


    }
    return (
        <>
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
                    <button type="onSubmit" > Registrar nuevo usuario </button>
                </fieldset>
            </form>
        </>
    )

}

export default CreateUser