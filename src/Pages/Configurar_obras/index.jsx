import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import './style.css'
import { api } from "../../Services/API"
import {FaPlus, FaPenAlt, FaTrashAlt} from 'react-icons/fa'
import { Mensagem } from "../../Components/Mensagem"
import { CircularProgress } from "@mui/material"
import {AiOutlineSearch} from 'react-icons/ai'


import fundo_deletar from '../../Images/fundo_deletar.svg'

export const CadastrarObras = () => {

    const [mensagemAviso, setMensagemAviso] = useState('')
    const [tipo,setTipo] = useState('')
    const [modelCadastrar, setModelCadastrar] = useState(false)
    const [modelDeletar, setModelDeletar] = useState(false)
    const [opcao, setOpcao] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [autores, setAutores] = useState('')
    const [resumo, setResumo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [Carregando, setCarregando] = useState(false)
    const [Obras, setObras] = useState('')
    const [pesquisaObra, setPesquisaObra] = useState(false)
    const [pesquisa, setPesquisa] = useState('')
    const [tituloPesquisa, setTituloPesquisa] = useState('')

    const pesquisarObraTitulo = async () =>{
        if (pesquisa) {
            setPesquisa('')
        }
        try{
            const data = {
                titulo:tituloPesquisa
            }
            const res = await api.post("/pesquisar_obra", data)
            console.log(res)
            setPesquisaObra(true)
            setPesquisa(res.data.pesquisa)

            

        }catch(err){
            console.log(err)
        }

    }

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

    const abrirModelDeletar = () =>{
        if(modelDeletar){
            setModelDeletar(false)
            setOpcao(false)
            
        }else{
            setModelDeletar(true)
            setOpcao(true)
            setModelCadastrar(false)
        }
    }

    const abrirModelCadastrar = () =>{
        if(modelCadastrar){
            setModelCadastrar(false)
            setOpcao(false)
        }else{
            setModelCadastrar(true)
            setOpcao(true)
            setModelDeletar(false)
        }
    }

    const adicionarObras = async () => {
        const data = {
            titulo,
            autores,
            descricao,
            resumo
        }

        try{
            if(mensagemAviso){
                setTipo('')
                setMensagemAviso('')
            }
            const res = await api.post('/cadastro_obras', data)
            if(res.data.status === 400){
                setTipo('erro')
                setMensagemAviso(res.data.Message)
            }else{
                setTipo('sucesso')
                setMensagemAviso(res.data.Message)
                setAutores('')
                setDescricao('')
                setResumo('')
                setTitulo('')
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        pegarObras()
    
    }, [])

    return(
        <div>
            <Header/>
            <main className="main-cadastrar-obras">
                <section className="main-cadastrar-obras-funcoes">
                    <div className="main-cadastrar-obras-funcoes-botoes">
                        <div className="editar">
                            <FaPenAlt/>
                            <h3>Editar obra</h3>
                        </div>
                        <div className="publicar" onClick={abrirModelCadastrar}>
                            <FaPlus/>
                            <h3>Publicar obra</h3>
                        </div>
                        <div className="deletar" onClick={abrirModelDeletar}>
                            <FaTrashAlt/>
                            <h3>Deletar obra</h3>
                        </div>
                    </div>
                </section>
                <section className="main-cadastrar-obras-opcoes">
                {opcao === true?(
                        <>
                            {modelCadastrar&&
                                <>
                                    <div className="main-cadastrar-obras-publicar-itens">
                                        <div className="main-cadastrar-obras-publicar-itens-titulo">
                                            <h2>Publicar Obras</h2>

                                            <button onClick={adicionarObras}><FaPlus/></button>
                                        </div>
                                        <div className="main-cadastrar-obras-publicar-itens-mensagem">
                                            {mensagemAviso&&
                                                <Mensagem tipo={tipo} msg={mensagemAviso}/>
                                            }
                                        </div>
                                        <div className="main-cadastrar-obras-publicar-itens-titulo-obra">
                                            <h3>Titulo:</h3>
                                            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                                        </div>
                                        <div className="main-cadastrar-obras-publicar-itens-autores">
                                            <h3>Autores:</h3>
                                            <input type="text" value={autores} onChange={(e) => setAutores(e.target.value)}></input>
                                        </div>
                                        <div className="main-cadastrar-obras-publicar-itens-resumo">
                                            <h3>Resumo:</h3>
                                            <textarea value={resumo} type="text" wrap="soft" onChange={(e) => setResumo(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-obras-publicar-itens">
                                        <div className="main-cadastrar-obras-publicar-itens-descricao">
                                            <h3>Descrição:</h3>
                                            <textarea value={descricao} type="text" wrap="soft" onChange={(e) => setDescricao(e.target.value)}/>
                                        </div>
                                    </div>
                                </>
                            }
                            {modelDeletar&&
                                <>
                                <div className="main-cadastrar-obras-deletar">
                                    <div className="main-cadastrar-obras-deletar-conteudo">
                                        <div className="main-cadastrar-obras-deletar-conteudo-pesquisa">
                                            <div className="main-cadastrar-obras-deletar-conteudo-pesquisa-btn">
                                                <AiOutlineSearch className='containerUsuario-pesquisa-barra-loupe' onClick={pesquisarObraTitulo}/>
                                            </div>
                                            <div className="main-cadastrar-obras-deletar-conteudo-pesquisa-input">
                                                <input type="text" placeholder="Digite o titulo da obra " onChange={(e) => setTituloPesquisa(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="main-cadastrar-obras-deletar-conteudo-obras">
                                            {pesquisaObra === false?(
                                                <>
                                                    <h3>Pesquise por uma obra</h3>
                                                    <img src={fundo_deletar} alt="esperando" />
                                                </>
                                            ):(
                                                pesquisa.map((item) =>(
                                                    <div className="main-cadastrar-obras-deletar-conteudo-obras-caixa">
                                                        <div className="main-cadastrar-obras-deletar-conteudo-obras-caixa-titulo">
                                                            <h3>Titulo: {item.titulo}</h3>
                                                            <h3>Autores: {item.autores}</h3>
                                                            <FaTrashAlt/>
                                                        </div>
                                                        <div className="main-cadastrar-obras-deletar-conteudo-obras-caixa-resumo">
                                                            <h3>Resumo:</h3>
                                                            <p>{item.resumo}</p>
                                                        </div>
                                                        
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-obras-deletar-container">
                                        <div className="cadastrar-obras-deletar-container-lista-bloco">
                                            <div className="main-cadastrar-obras-deletar-container-titulo">
                                                <h1>Obras</h1>
                                            </div>
                                            <div className="main-cadastrar-obras-deletar-container-lista">
            
                                                    {Carregando===true?(
                                                        
                                                        Obras.map((itens, index) => (
                                                            <>
                                                                <div  className="main-cadastrar-obras-deletar-container-lista-bloco-titulo">
                                                                    <h3> {itens.titulo}</h3>
                                                                </div>
                                                            </>
                                                        ))
                                                    ):(
                                                        <CircularProgress></CircularProgress>
                                                    )} 
                                                </div>
                                        </div>
                
                                    </div>

                                </div>
                                </>
                            }
                        </>
                    ):(
                        <div className="main-cadastrar-obras-funcoes-vazio">

                        </div>
                    )}
                </section>
                
            </main>

        </div>
    )
}