import Header from "../../Components/Header"
import { api } from "../../Services/API"
import { loginToken, setarIdUsuario, setarNomeUsuario, setarTipoUsuario } from "../../Services/localstorage"
import './style.css'
export const Login = () =>{

    const fazerLogin = async() =>{

        const data ={
            usuario:'gustavo',
            senha:'abcd1234'
        }

        try{
            const res = await api.post('/login', data)
            setarIdUsuario(res.data.id)
            setarNomeUsuario(res.data.usuario)
            loginToken(res.data.token)
            setarTipoUsuario(res.data.tipo_usuario)

        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <Header/>
            <main>
                <button onClick={fazerLogin}>Login</button>
            </main>
        </>
    )
}