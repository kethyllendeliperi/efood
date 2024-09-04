import * as S from './styles'
import star from '../../assets/images/estrela.png'

import Tag from '../Tag'
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
    <S.Card className="container">
      <img src={imagem} alt={titulo} />
      <S.Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Tags>
      <S.CardContainer>
        <S.CardCabecalho>
          <S.CardTitulo>{titulo}</S.CardTitulo>
          <S.Avaliacao>
            <p>{avaliacao}</p>
            <img src={star} alt="Estrela de avaliação" />
          </S.Avaliacao>
        </S.CardCabecalho>
        <S.CardDescricao>{getDescricao(descricao)}</S.CardDescricao>
        <Botoes
          to={`/perfil/${id}`}
          tipo="link"
          titulo="Clique para ver o S.cardápio"
        >
          Saiba mais
        </Botoes>
      </S.CardContainer>
    </S.Card>
  )
}

export default RestaurantesTemplate
