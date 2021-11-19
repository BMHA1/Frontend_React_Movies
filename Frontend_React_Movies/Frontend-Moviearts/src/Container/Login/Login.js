// import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Login.scss'
import { APIConsumer } from "../../services/APIConsumer"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
// import logo from '../../../public/Imagenes/logo.JPG'

const Login = (props) => {

    let navigate = useNavigate()

    //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        try {

            let res = await APIConsumer.loginUser(email, password)
            console.log(res.token)
            localStorage.setItem("token", res.token)
            decode(res.token)

        } catch (error) {
            alert(error + "hola mundo")
        }

    }


    const decode = (token) => {

        let jtw = jwt_decode(token)
        console.log(typeof token)
        console.log(token)
        if (jtw && jtw.role === "user") {
            localStorage.setItem("role", "2220519") // letras  u=22 s=20 e=5 r=19
            navigate('/profileUser')
        } else {
            navigate('/profileAdmin')
        }
    }

    return (
        <div className = "Profile">
            <h1 className='logo'>MovieArt B.M.S</h1>
            <form onSubmit={(e) => handleSendData(e)}>
                <fieldset>
                    <legend>Bienvenido a mi página</legend>
                    <div>
                        <div className="float-right">
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
                                    placeholder="Password"
                                    required />
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button type="onSubmit" >
                    Entrar
                </button>
                <button> <NavLink className="navbar-item" activeClassName="is-active" to="/register">Sing Up</NavLink></button>
            </form>

        </div>
    )
}
export default Login