import {AiOutlineSearch} from 'react-icons/ai'
import './style.css'
import { api } from '../../../Services/API'
import { useState, useEffect } from 'react'


export const ObrasUsuario = () => {
    
    const [ Obras, setObras] = useState()
    const [Carregando, setCarregando] = useState(false)

    const pegarUsuario = async () => {
        try {
            
            const res = await api.get("/obras")
            console.log(res)
            setObras(res.data)
            setCarregando(true)
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
                    
                    {Carregando === true?(
                        Obras.map((item, index) => (
                            <div className='containerUsuario-pesquisa-mostrarObras'>
                                <div className="containerUsuario-pesquisa-mostrarObras-titulos">

                                    <h3>Titulo: {item.titulo}</h3>

                                    <h3>Autores: {item.autores}</h3>
                                </div>

                                <div className="containerUsuario-pesquisa-mostrarObras-resumo">
                                    <h3> Resumo: </h3>
                                    <p> { item.resumo } </p>
                                </div>
                                
                                <div className="containerUsuario-pesquisa-mostrarObras-descricao">
                                    <h3> Descrição: </h3>
                                    <p> { item.descricao } </p>
                                </div>

                                
                            </div>
                        ))
                    ): (
                        <h1> Carregando...</h1>
                    )
                    }
                        
                    
                    

                </div>
                
            </div>

            <div className="containerUsuario-obras">
                <div className="containerUsuario-obras-divisao">
                    <div className="containerUsuario-obras-divisao-titulo">
                        <h1>Titulo</h1>
                    </div>
                    <div className='containerUsuario-obras-divisao-conteudo'>
                        {Carregando === true?(
                            Obras.map((item, index) => (
                                <div key={index} className="containerUsuario-obras-divisao-conteudo-titulo">
                                    <h4>{item.titulo}</h4>
                                </div>

                            ))
                        ): (
                            <h1> Carregando...</h1>
                        )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    )
}