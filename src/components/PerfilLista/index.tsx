import { ContainerLista } from './styles'
import { Restaurantes } from '../../pages/Home'
import PerfilTemplate from '../PerfilTemplate'

type Props = {
  pratos: Restaurantes['cardapio']
}

const PerfilLista = ({ pratos }: Props) => {
  return (
    <ContainerLista className="container">
      {pratos.map((prato) => (
        <li key={prato.id}>
          <PerfilTemplate
            foto={prato.foto}
            preco={prato.preco}
            id={prato.id}
            nome={prato.nome}
            descricao={prato.descricao}
            porcao={prato.porcao}
          />
        </li>
      ))}
    </ContainerLista>
  )
}

export default PerfilLista
