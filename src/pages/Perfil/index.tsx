import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CabecalhoPerfil from '../../components/CabecalhoPerfil'
import PerfilLista from '../../components/PerfilLista'
import Carrinho from '../../components/Carrinho'

import { useGetCardapioQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)

  return (
    <>
      <CabecalhoPerfil />
      <Carrinho />
      {cardapio && <Banner cardapio={cardapio} />}
      {cardapio && <PerfilLista pratos={cardapio.cardapio} />}
    </>
  )
}
export default Perfil
