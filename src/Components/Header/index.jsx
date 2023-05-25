import './style.css'

import { NavLink} from 'react-router-dom'

import { FaBars,FaTimes,FaUserAlt } from "react-icons/fa";


import Logo from '../../Images/Logo.png'
import { useEffect, useState } from 'react';
import { api } from '../../Services/API';
import { pegarNomeUsuario } from '../../Services/localstorage';
function Header (){

    const [usuario,setUsuario] = useState('')

    const pegarUsuario = async() =>{

        const data = {
            usuario:pegarNomeUsuario()
        }

        try{
            const res = await api.post('/pesquisar_usuario_nome', data)
            setUsuario(res.data.verificarUsuario)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        pegarUsuario()
    },[usuario])


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
                {usuario && usuario.tipo_de_usuario === 'admin'?(
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/Obras">Obras</NavLink>
                        <NavLink to="/Biografia">Biografia</NavLink>
                        <NavLink to="/Configurar_Obras">Configurar obras</NavLink>
                        <NavLink to="/Cadastrar_Usuario">Cadastrar Usuario</NavLink>
                        <NavLink to="/Homenagens">Homenagens</NavLink>
                    </>
                ):(
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/Obras">Obras</NavLink>
                        <NavLink to="/Biografia">Biografia</NavLink>
                        <NavLink to="/Homenagens">Homenagens</NavLink>
                        <NavLink to="/Login"><FaUserAlt className='container-navbar-usuario'/></NavLink>
                    </>
                )}
            </nav>
            <nav className={menuMobile}>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Obras">Obras</NavLink>
                <NavLink to="/Biografia">Biografia</NavLink>
                <NavLink to="/Homenagens">Homenagens</NavLink>
                <NavLink to="/Login"><FaUserAlt className='container-navbar-usuario'/></NavLink>
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