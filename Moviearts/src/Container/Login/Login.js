import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Login.css'

const Login = () => {


    const [Email, setEmail] = useState(null)
    const [Password, setPassword] = useState(null)


    useEffect(() => {
        console.log('soy estado2')
        fetch('http:localhost:4025/users/login', {
            method: 'POST', // preguntar si aqui pueden ir varios metodos
            body: JSON.stringify({
                "email": Email,
                "password": Password,
            })
        })
    }, [])

    const handleChange = (event) => {
        setEmail(event.target.value);
        console.log(setEmail)
    }

    return (
        <>
            <form className="color">
                <fieldset>
                    <legend>Bienvenido a BMS</legend>
                    <div>
                        <div className="float-right">
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    value={setEmail}
                                    onChange={handleChange}
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    value={setPassword}
                                    onChange={handleChange}
                                    required />
                            </label>
                        </div>
                    </div>
                    <button >
                        Entrar
                    </button>

                    <button> <NavLink className="navbar-item" activeClassName="is-active" to="/register">Sing Up</NavLink></button>
                </fieldset>
            </form>
        </>
    )
}

export default Login