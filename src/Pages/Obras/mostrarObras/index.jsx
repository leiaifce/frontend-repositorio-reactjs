import { useState } from 'react'
import './style.css'
import axios from 'axios'

export const mostrarObras = () => {

    const [carregado, setcarregado] = useState('')

    const api = axios.create({
        baseURL: "https://frontend-repositorio-reactjs.vercel.app/"
    })
    const res = async () => {
        (res.data)
    }

    return (
    <div>
        <div className="containerMostrarObras">
            <>
            </>
        </div>
    </div>
    )
}
