import './App.css';
import Menu from './Menu'

const titles = {
    auth : 'Авторизация',
    register: 'Регистрация',
    home: 'Личный кабинет',
    catalog: 'Каталог'
}

const Template = (props)=>(
    <div>
        <Header />
        <Welcome title={titles[props.match.params.path]} />
    </div>
)
const Logo = ()=>(
    <a href="/home">My website</a>
)

const Header = ()=>(
    <header>
        <div className="header__logo">
            <Logo />
        </div>
        <Menu />
    </header>
)
const Welcome = (props)=>(
    <div className="welcome">
        <h1>{props.title}</h1>
    </div>
)

export default Template