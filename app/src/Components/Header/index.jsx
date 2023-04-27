import './style.css'

import { NavLink} from 'react-router-dom'


import Logo from '../../Images/Logo.png'
function Header (){

    return ( 
        <header className="container">
            <div className='container-logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <nav className='container-navbar'>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Obras">Obras</NavLink>
                <NavLink to="/Biografia">Biografia</NavLink>
                <NavLink to="/Homenagens">Homenagens</NavLink>
            </nav>
        </header>
    )
}

export default Header