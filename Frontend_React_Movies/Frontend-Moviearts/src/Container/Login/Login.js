// import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Login.css'
import { APIConsumer } from "../../services/APIConsumer"
import jwt_decode from "jwt-decode"

const Login = () => {


    const handleSendData = async (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        try {

            let res = await APIConsumer.loginUser(email, password)
            console.log(res.token)
            localStorage.setItem("token", res.token)

            let jtw = jwt_decode(res.token)
            console.log (jtw.role)
            // if(token){
            //     useNavigate.lo
            // }
        } catch (error) {
            alert(error + "hola mundo")
        }
    }
    return (
        <>
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
        </>
    )
}
export default Login