import './Menu.css'
import React,{Component} from 'react'
class Menu extends Component{
    render(){
        return(
            <nav>
                <div className="topnav" id="topnav1">
                    <a href="/home">HOME</a>
                    <a href="/catalog">Catalog</a>
                    <a href="/auth">Log in</a>
                    <a href="/register">Register</a>
                    <a href="/logout">Log out</a>
                </div>
            </nav>
        )
    }
}

export default Menu