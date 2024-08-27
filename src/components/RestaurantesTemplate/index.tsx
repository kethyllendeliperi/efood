import Tag from '../Tag'

import {
  Card,
  CardContainer,
  CardDescricao,
  CardTitulo,
  Avaliacao,
  Tags,
  CardCabecalho
} from './styles'

import star from '../../assets/images/estrela.png'
import Botoes from '../Botoes'

type Props = {
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  tags: string[]
  imagem: string
  id: number
}

const RestaurantesTemplate = ({
  titulo,
  avaliacao,
  descricao,
  tags,
  imagem,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 198) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }
  return (
    <Card className="container">
      <img src={imagem} alt={titulo} />
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <CardContainer>
        <CardCabecalho>
          <CardTitulo>{titulo}</CardTitulo>
          <Avaliacao>
            <p>{avaliacao}</p>
            <img src={star} alt="Estrela de avaliação" />
          </Avaliacao>
        </CardCabecalho>
        <CardDescricao>{getDescricao(descricao)}</CardDescricao>
        <Botoes
          to={`/perfil/${id}`}
          tipo="link"
          titulo="Clique para ver o cardápio"
        >
          Saiba mais
        </Botoes>
      </CardContainer>
    </Card>
  )
}

export default RestaurantesTemplate
