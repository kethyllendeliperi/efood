import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardapioDosRestaurantes from './pages/CardapioDosRestaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/perfil" element={<CardapioDosRestaurantes />}></Route>
    <Route path="/perfil/:id" element={<CardapioDosRestaurantes />}></Route>
  </Routes>
)

export default Rotas
