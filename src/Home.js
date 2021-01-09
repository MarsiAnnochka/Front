import './App.css'
import React from 'react'
import {Redirect} from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {basket: 0, logged: true, cash: 0}
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        fetch('/api/home', {
            method: "post",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => {
                if (data.logged) {
                    this.setState({logged:true, cash: data.cash, basket: data.basket})
                } else {
                    this.setState({logged:false})
                }
            }).catch(e => {
                console.error((e))
            })
        }).catch(e => {
            console.error((e))
        })
    }

    onChange(event){
        event.preventDefault()
        let newCash = this.state.cash - this.state.basket
        if (newCash >= 0) {
            this.setState({basket: 0, cash: newCash})
            fetch('/api/home', {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({change: newCash})
            }).then(res => {}).catch(e => {
                console.error((e))
            })
        }
    }
    render() {
        if (!this.state.logged) {
            return (<Redirect to="/auth"/>)
        }
        else {
            return (
                <div class="wrapper">
                    <h1 id="about">Добро пожаловать!</h1>
                    <p>На вашем счету {this.state.cash} руб</p>
                    <p>Корзина: {this.state.basket} руб</p>
                    <button onClick={this.onChange}>Купить!</button>
                </div>
            )
        }
    }
}

export default Home