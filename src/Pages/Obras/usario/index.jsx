import {AiOutlineSearch} from 'react-icons/ai'
import './style.css'
import { api } from '../../../Services/API'
import { useState, useEffect } from 'react'


export const ObrasUsuario = () => {
    
    const [ Obras, setObras] = useState('')

    const pegarUsuario = async () => {
        try {
            
            const res = await api.get("/obras")
            console.log(res)
        }
        catch (erro){
            console.log(erro)
        }
    }

    useEffect(() => {
        pegarUsuario()
    }, 
    [])
    return (
    <main className="main">
        <div className="containerUsuario">
            <div className="containerUsuario-pesquisa">
                <div className="containerUsuario-pesquisa-barra">
                    <div className="containerUsuario-pesquisa-barra-btn">
                        <AiOutlineSearch onClick={pegarUsuario} className='containerUsuario-pesquisa-barra-loupe'/>
                    </div>
                    
                    <input type="text" placeholder="Pesquisar"/>
                </div>
                <div className='containerUsuario-pesquisa-obras'>
                    <div className="containerUsuario-pesquisa-mostrarObras"></div>
                    <div className="containerUsuario-pesquisa-mostrarObras"></div>
                    <div className="containerUsuario-pesquisa-mostrarObras"></div>
                    <div className="containerUsuario-pesquisa-mostrarObras"></div>
                    <div className="containerUsuario-pesquisa-mostrarObras"></div>
                </div>
                
            </div>

            <div className="containerUsuario-obras">
                <div className="containerUsuario-obras-divisao">
                    <div className="containerUsuario-obras-divisao-titulo">
                        <h1>Titulo</h1>
                    </div>
                    <div className='containerUsuario-obras-divisao-conteudo'>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    )
}