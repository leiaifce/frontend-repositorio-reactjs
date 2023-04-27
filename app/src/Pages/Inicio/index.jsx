import Header from "../../Components/Header"
import React, {useState} from "react"



const Inicio = () =>{


    setInterval(() =>{
            if(tipo === 'text'){
                setTipo('password')
            }else{
                setTipo('text')
            }
        },2000)


    const qualquer = () =>{
        console.log("Hellow")
    }
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('text')


    const olhinho = () =>{
        if(tipo === 'text'){
            setTipo('password')
        }else{
            setTipo('text')
        }
    }
    
    return(
        <div>
            <Header/>
            <main>

                <button onClick={qualquer}>Click aqui</button>
                <input type={tipo} value={nome} onChange={(e) => setNome(e.target.value)} />
                <button onClick={olhinho}>X</button>
                
                <div>
                    {nome}
                </div>
                    
            </main>
        </div>
    )
}

export default Inicio