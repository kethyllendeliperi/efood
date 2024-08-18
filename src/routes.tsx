import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Trattoria from './pages/Trattoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/perfil" element={<Trattoria />}></Route>
  </Routes>
)

export default Rotas
