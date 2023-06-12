import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Produto from './pages/Produto'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
    <Route path="/Produto" element={<Produto />} />
  </Routes>
)

export default Rotas
