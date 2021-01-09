import './App.css'
import Form from './Form'
import React from 'react'

class Register extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <h1 id="about">Введите имя пользователя и пароль</h1>
                <Form path = "/api/register"/>
            </div>
        )
    }
}

export default Register