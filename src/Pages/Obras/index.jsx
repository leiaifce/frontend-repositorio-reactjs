import {AiOutlineSearch} from 'react-icons/ai'
import './style.css'
import { api } from '../../Services/API'
import { useState, useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../../Components/Header';


export const Obras = () => {
    
    const containerPesquisaObras = useRef(null)
    const [ Obras, setObras] = useState()
    const [Carregando, setCarregando] = useState(false)
    const [pesquisa,setPesquisa] = useState('')
    const [obraPesquisa, setObraPesquisa] = useState('')
    const [pesquisaId, setPesquisaId] = useState(false)

    const pegarObras = async () => {
        try {
            
            const res = await api.get("/obras")
            setObras(res.data)
            setCarregando(true)
        }
        catch (erro){
            console.log(erro)
        }
    }

    const pesquisarObra = async () =>{
        if (pesquisa) {
            setPesquisa('')
        }
        try{
            const data = {
                titulo:obraPesquisa
            }
            const res = await api.post("/pesquisar_obra", data)
            
            setPesquisa(res.data.pesquisa)

            window.scrollTo(0,0)
            

        }catch(err){
            console.log(err)
        }

    }

    const pesquisarObraTitulo = async (_id) =>{
        if (pesquisa) {
            setPesquisa('')
        }
        try{

            const res = await api.get('/pegar_obraid/'+ _id)

            setPesquisa(res.data)
            setPesquisaId(true)

            containerPesquisaObras.current.scrollTo(0,0)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        pegarObras()
    }, 
    [])

    useEffect(() =>{

        containerPesquisaObras.current?.scrollIntoView({behavior: "smooth"})
    })
    

    
    return (
        <>
            <Header/>
            <main className="main">
                <div className="containerUsuario">
                    <div className="containerUsuario-pesquisa" ref={containerPesquisaObras}>
                        <div className="containerUsuario-pesquisa-barra">
                            <div className="containerUsuario-pesquisa-barra-btn">
                                <AiOutlineSearch onClick={pesquisarObra} className='containerUsuario-pesquisa-barra-loupe'/>
                            </div>
                            
                            <input type="text" value={obraPesquisa} placeholder="Pesquisar" onChange={(e) => setObraPesquisa(e.target.value)}/>
                        </div>
                        <div className='containerUsuario-pesquisa-obras'>
                            
                            {Carregando === true?(
                                <>
                                    
                                    {
                                    pesquisaId === true &&
                                    
                                    <>
                                            <h1>Pesquisa:</h1>
                                            <div className='containerUsuario-pesquisa-mostrarObras'>
                                                <div className="containerUsuario-pesquisa-mostrarObras-titulos">

                                                    <h3>Titulo: {pesquisa.titulo}</h3>

                                                    <h3>Autores: {pesquisa.autores}</h3>
                                                </div>

                                                <div className="containerUsuario-pesquisa-mostrarObras-resumo">
                                                    <h3> Resumo: </h3>
                                                    <p> { pesquisa.resumo } </p>
                                                </div>
                                                
                                                <div className="containerUsuario-pesquisa-mostrarObras-descricao">
                                                    <h3> Descrição: </h3>
                                                    <p> { pesquisa.descricao } </p>
                                                </div>                         
                                            </div>
                                            <div className='pesquisa_linha'></div>
                                        </>

                                    }
                                    {
                                        pesquisaId === false&&
                                            <>
                                                {
                                                    pesquisa&&(
                                                        <>
                                                            {
                                                                pesquisa.map((item, index) => (
                                                                    <div className='containerUsuario-pesquisa-mostrarObras' key={index}>
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
                                                            }
                                                        </>
                                                    )
                                                }
                                            </>
                                            
                                    }
                                </>
                            ):(
                                <CircularProgress/>
                            )}
                            {
                                Obras?(
                                    <>
                                        <h1>Obras</h1>
                                    {
                                        Obras.map((item, index) => (
                                            <div className='containerUsuario-pesquisa-mostrarObras' key={index}>
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
                                    }
                                    </>
                                ): (
                                    <CircularProgress/>
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
                                            <h4 onClick={() => pesquisarObraTitulo(item._id)}>{item.titulo}</h4>
                                        </div>

                                    ))
                                ): (
                                    <CircularProgress/>
                                )
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}