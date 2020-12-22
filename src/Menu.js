import './Menu.css'
const Menu = ()=>(
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

export default Menu