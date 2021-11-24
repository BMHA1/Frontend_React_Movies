import { useEffect, useState } from 'react';
// import { APIConsumer } from '../../services/APIConsumer';
import Button from '../Button/Button';




const ModifyUser = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const HandelChangeSend = (d) => {
        //     setLoading(true)
        //     d.preventDefault()
        //     const name = d.target.name.value
        //     const surname = d.target.surname.value
        //     const email = d.target.email.value
        //     const password = d.target.password.value
        //     setTimeout(async () => {

        //         try {
        //             let result = await APIConsumer.CreateUser(name, surname, email, password)
        //             console.log(result)
        //             setLoading(false)
        //         } catch (error) {
        //             alert(error)
        //             setError(true)
        //             setLoading(false)
        //         }
        //     }, 5000);

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
                                    placeholder='id'
                                    readonly='readonly'
                                />
                            </label>
                        </div>

                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    // placeholder=
                                    // value={user._email}
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='role'
                                    name='role'
                                    // placeholder={user._role}
                                    required />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Modificar</Button>
                </fieldset>
            </form>
        </>
    )

}

export default ModifyUser