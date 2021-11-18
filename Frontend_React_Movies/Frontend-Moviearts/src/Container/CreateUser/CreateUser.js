import React, { useState, useEffect } from 'react';


const SingUp = () => {

    console.log("aqui esta")
    // const createUSer = async() => {
    //     let res = await fetch(url)
    //     res = await res.json
    // }
    // useEffect(() => {
    //    fech(url || url2 )
    // }, [])
    // useState(() => {
    //     createUSer()
    // }, [])

    return (
        <>
            <form >
                <fieldset>
                    <legend>Por Favor Rellene todos los campos</legend>
                    <div>
                        <div>
                            <label>
                                Nombre: 
                                <input
                                    type='text'
                                    name='name'  
                                    placeholder="Escribe aqui tu nombre"
                                    // value ={state.name}
                                    // onChange = {handleChange}
                                    required/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Apellido: 
                                <input 
                                    type='text' 
                                    name='surname'  
                                    placeholder="Escribe aqui tu apellido" 
                                    // value = {state.name}
                                    // onChange= {handleChange}
                                    required/>
                            
                            </label>
                        </div>
                        <div>
                            <label>Email: 
                            <input 
                                type='email' 
                                name='email'  
                                placeholder="Escribe aqui tu email" 
                                // value = {state.name}
                                // onChange= {handleChange} 
                                required/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Password: 
                                <input 
                                    type='text' 
                                    name='password'  
                                    placeholder="Escribe aqui tu contraseña" 
                                    // value = {state.name}
                                    // onChange= {handleChange}
                                    required/>
                            </label>
                        </div>
                    </div>
                <button> Registrar nuevo usuario </button>
                </fieldset>
            </form>
        </>
    )

}

export default SingUp