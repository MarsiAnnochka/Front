import './App.css'
import Form from './Form'
const Register = ()=>(
    <div className="wrapper">
        <h1 id="about">Введите имя пользователя и пароль</h1>
        <Form path = "/register/success"/>
    </div>
)
export default Register