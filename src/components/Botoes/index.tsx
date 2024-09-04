import * as S from './styles'

export type Props = {
  tipo: 'botao' | 'link'
  titulo: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Botoes = ({ tipo, titulo, to, onClick, children, disabled }: Props) => {
  if (tipo === 'botao') {
    return (
      <S.BotaoContainer onClick={onClick} disabled={disabled}>
        {children}
      </S.BotaoContainer>
    )
  }
  return (
    <S.BotaoLink to={to as string} title={titulo}>
      {children}
    </S.BotaoLink>
  )
}

export default Botoes
