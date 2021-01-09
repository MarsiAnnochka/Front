import './App.css'
import Form from './Form'
import React from 'react'

class Authorize extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <h1 id="about">Введите имя пользователя и пароль</h1>
                <Form path="/api/auth"/>
            </div>
        )
    }
}

export default Authorize