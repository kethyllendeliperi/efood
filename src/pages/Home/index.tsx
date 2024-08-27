import { useGetOpcoesRestaurantesQuery } from '../../services/api'
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
  const { data } = useGetOpcoesRestaurantesQuery()

  if (data) {
    return (
      <>
        <HeaderHome />
        <div className="container">
          <RestaurantsOptions restaurantes={data} />
        </div>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
