import './style.css'

import { NavLink} from 'react-router-dom'

import { FaBars,FaTimes } from "react-icons/fa";

import Logo from '../../Images/Logo.png'
import { useState } from 'react';
function Header (){

    const [abertoOuFechado, setAbertoOuFechado] = useState(false)
    const [menuMobile, setMenuMobile] = useState('container-navbar-mobile')

    const menu = () =>{

        if(abertoOuFechado === false){
            setAbertoOuFechado(true)
            setMenuMobile('container-navbar-mobile ativo')
        }else{
            setAbertoOuFechado(false)
            setMenuMobile('container-navbar-mobile')
        }
    }

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
            <nav className={menuMobile}>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Obras">Obras</NavLink>
                <NavLink to="/Biografia">Biografia</NavLink>
                <NavLink to="/Homenagens">Homenagens</NavLink>
            </nav>
            <div className='container-hamburguer' onClick={menu}>
                {abertoOuFechado === false?(
                    <FaBars></FaBars>
                ):(
                    <FaTimes></FaTimes>
                )
                }
            </div>
        </header>
    )
}

export default Header