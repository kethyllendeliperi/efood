import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/perfil/:id" element={<Perfil />}></Route>
  </Routes>
)

export default Rotas
