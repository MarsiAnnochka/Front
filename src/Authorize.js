import './App.css'
import Form from './Form'
const Authorize = ()=>(
    <div className="wrapper">
        <h1 id="about">Введите имя пользователя и пароль</h1>
        <Form path = "/auth/success"/>
    </div>
)
export default Authorize