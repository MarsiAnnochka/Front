import './App.css';
import Menu from './Menu'
import React, {Component} from 'react'
const titles = {
    auth : 'Авторизация',
    register: 'Регистрация',
    home: 'Личный кабинет',
    catalog: 'Каталог',
    logout: 'Выход'
}

class Template extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Header />
                <Welcome title={titles[this.props.match.params.path]} ></Welcome>
            </div>
        )
    }
}
class Logo extends React.Component{
    
    render(){
        return (<a href="/home">My website</a>)
    }
}

class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="header__logo">
                    <Logo />
                </div>
                <Menu />
            </header>
        )
    }
}

class Welcome extends React.Component{

    render(){
        return(
            <div className="welcome">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default Template