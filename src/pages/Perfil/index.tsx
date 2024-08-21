import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurantes } from '../Home'

import Banner from '../../components/Banner'
import CabecalhoPerfil from '../../components/CabecalhoPerfil'
import PerfilLista from '../../components/PerfilLista'

const Perfil = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  return (
    <>
      <CabecalhoPerfil />
      {cardapio && <Banner cardapio={cardapio} />}
      {cardapio && <PerfilLista pratos={cardapio.cardapio} />}
    </>
  )
}
export default Perfil
