
import './Login.scss'
import { APIConsumer } from "../../services/APIConsumer"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import logo from "./logo.JPG"
import Button from "../Components/Button/Button"


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
            navigate('/moviepage')
        } else {
            navigate('/profileAdmin')
        }
    }
    const redirection = () => {
        navigate("/register")
    }

    return (
        <div>
            <div className="Profile">
                <img className="Logo" src={logo} alt="logo" />
                <form onSubmit={(e) => handleSendData(e)}>
                    <legend>¿Preparado para vivir una experiencia?</legend>
                    <div className='formulario'>
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
                    <div className="content-button">
                        <Button className="buttonEntrar" type="onSubmit" ><span> Entrar </span></Button>
                        <Button onClick={() => redirection()} ><span> Registrarte </span></Button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login