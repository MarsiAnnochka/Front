import './App.css'
import React from 'react'
import {Redirect} from 'react-router-dom'


class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
        this.onSubmit=this.onSubmit.bind(this)
    }
    
    onSubmit(event){
        event.preventDefault()
        fetch(this.props.path, {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
        }).then(res => {
            res.json().then(data => {
                 if (data.error) {
                    this.setState({logged: false})
                } else {
                     this.setState({logged: true})
                }
                console.log(data)
            }).catch(e => {
                console.error((e))
            })
        }).catch(e => {
            console.error((e))
        })
    }
    

    render(){
        if (this.state.logged) {
            return (<Redirect to='/catalog' />)
        }
        else {
            return (
                <form>
                    <p>
                        <b>Имя пользователя: </b>
                        <input required="true" type="text" id="username" /><br/>
                        <b>Пароль: </b>
                        <input autoComplete="off" required="true" type="password"
                               id="password"/><br/>
                        <button onClick={this.onSubmit} id="ready">Ready</button>
                    </p>
                </form>
            )
        }
    }
}

export default Form