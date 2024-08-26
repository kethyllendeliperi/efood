import { useEffect, useState } from 'react'

import HeaderHome from '../../components/CabecalhoHome'
import RestaurantsOptions from '../../components/RestaurantesLista'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [opcoes, setOpcoes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setOpcoes(res))
  }, [])

  return (
    <>
      <HeaderHome />
      <div className="container">
        <RestaurantsOptions restaurantes={opcoes} />
      </div>
    </>
  )
}

export default Home
