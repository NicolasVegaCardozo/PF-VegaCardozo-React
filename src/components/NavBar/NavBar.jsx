import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1 className='titulo'>TechHub</h1>
            </Link>

            <nav>
                <ul className='navbar'>
                    <li>
                        <NavLink to={`/categoria/1`}> Computadoras </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/2`}> Notebooks </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/3`}> Gameroom </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/4`}> Monitores </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/5`}> Periféricos </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/6`}> Componentes </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar