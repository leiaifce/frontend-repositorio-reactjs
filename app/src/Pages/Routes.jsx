
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './Inicio'
import Obras from './Obras'
import Homenagens from "./Homenagens"
import Biografia from "./Biografia"
const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/Obras" element={<Obras/>}></Route>
            <Route  exact path="/Homenagens" element={<Homenagens/>}></Route>
            <Route  exact path="/Biografia" element={<Biografia/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente