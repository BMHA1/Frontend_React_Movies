
import './Login.scss'
import { APIConsumer } from "../../services/APIConsumer"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import logo from "./logo.JPG"
import Button from "../Components/Button/Button"
import Title from "../Components/Title/Tittle"



const Login = (props) => {


    let navigate = useNavigate()

    //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        try {

            let res = await APIConsumer.loginUser(email, password);
            localStorage.setItem("token", res.token);
            decode(res.token);

        } catch (error) {
            alert(error, " hola mundo");
        }

    }
    const decode = (token) => {

        let jtw = jwt_decode(token);
        console.log(jtw);
        localStorage.setItem("user", JSON.stringify(jtw));
        if (jtw && jtw.role === "user") {
            navigate('/homepage')
        } else {
            navigate('/profileAdmin')
        }
    }


    const redirection = () => {
        navigate("/register")
    }

    return (
        <div className="Padre">
            <div className="Profile">
                <img className="Logo-ideal" src={logo} alt="logo" />
                <form onSubmit={(e) => handleSendData(e)}>
                    <Title/>
                    <div className='imput'>
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
                        <Button type="onSubmit" className="buton-entrar"><span> Entrar </span></Button>
                        <Button onClick={() => redirection()} ><span> Registrarte </span></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login