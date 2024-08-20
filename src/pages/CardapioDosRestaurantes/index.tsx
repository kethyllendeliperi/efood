import Banner from '../../components/Banner'
import CabecalhoRestaurante from '../../components/CabecalhoRestaurante'
import OpcoesCardapio from '../../components/OpcoesCardapio'

import { Restaurantes } from '../Home'

export type Cardapios = []

const CardapioRestaurantes = () => (
  <>
    <CabecalhoRestaurante />
    <Banner />
    <div className="container"></div>
  </>
)

export default CardapioRestaurantes
