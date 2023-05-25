import { useState } from "react"
import Header from "../../Components/Header"
import './style.css'
import { api } from "../../Services/API"

import {FaPlus, FaPenAlt, FaTrashAlt} from 'react-icons/fa'
import { Mensagem } from "../../Components/Mensagem"

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
                                            <input type="text" placeholder="Digite o título"/>
                                        </div>
                                        <div className="main-cadastrar-obras-deletar-conteudo-obras">
                                            a
                                        </div>
                                    </div>
                                    <div className="main-cadastrar-obras-deletar-container">
                                        <div className="main-cadastrar-obras-deletar-container-lista-obras">
                                            a
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