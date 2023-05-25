import Header from "../../Components/Header"
import { api } from "../../Services/API"
import { loginToken, setarIdUsuario, setarNomeUsuario, setarTipoUsuario } from "../../Services/localstorage"
import './style.css'
import {FaUserCircle, FaUser, FaEye, FaEyeSlash} from 'react-icons/fa'
import { Mensagem } from "../../Components/Mensagem"
import { useState } from "react"


export const Login = () =>{

    const [msg, setMsg] = useState('')
    const [verSenha, setVerSenha] = useState(false)

    const mostrarSenha = () => {
        if (verSenha === true){
            setVerSenha(false)
        }else{
            setVerSenha(true)
        }
    }

    const fazerLogin = async() =>{

        const data ={
            usuario:'gustavo',
            senha:'5455'
        }
        if (msg) {
            setMsg('')
        }
        try{
            const res = await api.post('/login', data)
            console.log(res)
            setarIdUsuario(res.data.id)
            setarNomeUsuario(res.data.usuario)
            loginToken(res.data.token)
            setarTipoUsuario(res.data.tipo_usuario)
            setMsg(res.data.message)

        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <Header/>
            <main className="main-login">
                <div className="main-login-bolinha-um"></div>
                <div className="main-login-bolinha-dois"></div>

                <section className="conteiner-imagens">
                    <div className="conteiner-imagens-texto">
                        <h2>Se você deseja criar uma conta, entre em contato com o administrador responsável.</h2>
                    </div>
                    <div className="conteiner-imagens-imagem"></div>
                </section>
                <section className="conteiner-login">
                    <div className="conteiner-login-card">
                        <div className="conteiner-login-card-titulo">
                            <h1>Login</h1>
                        </div>
                        <div className="conteiner-login-card-imagem"><FaUserCircle/></div>
                        <div className="conteiner-login-card-formulario">
                            <p>Nome</p>
                            <div className="conteiner-login-card-formulario-campo">
                                <FaUser/>
                                <input></input>
                            </div>
                            <p>Senha</p>
                            <div className="conteiner-login-card-formulario-campo">
                                {verSenha === false?(
                                    <>
                                    <FaEyeSlash onClick={mostrarSenha}/>
                                    <input type="password"></input>
                                    </>
                                ):(
                                <>
                                <FaEye onClick={mostrarSenha}/>
                                <input type="text"></input>
                                </>
                                )
                                }
                                
                                
                            </div>
                        </div>
                        <div className="conteiner-login-card-botao">
                            <button className="conteiner-login-card-botao-btn" onClick={fazerLogin}>Logar</button>
                        </div>

                        <div className="conteiner-login-card-mensagem">
                            {msg &&
                                <Mensagem msg={msg} tipo='erro'/>
                            }
                            
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}