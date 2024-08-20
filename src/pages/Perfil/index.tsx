import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import CabecalhoPerfil from '../../components/CabecalhoPerfil'
import PerfilLista from '../../components/PerfilLista'

const Perfil = () => {
  const { id } = useParams()

  return (
    <>
      <CabecalhoPerfil />
      <Banner />
      <PerfilLista />
    </>
  )
}
export default Perfil
