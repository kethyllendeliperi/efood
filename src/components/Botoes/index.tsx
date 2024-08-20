import { BotaoContainer, BotaoLink } from './styles'

export type Props = {
  tipo: 'botao' | 'link'
  titulo: string
  to?: string
  onClick?: () => void
  children: string
}

const Botoes = ({ tipo, titulo, to, onClick, children }: Props) => {
  if (tipo === 'botao') {
    return <BotaoContainer onClick={onClick}>{children}</BotaoContainer>
  }
  return (
    <BotaoLink to={to as string} title={titulo}>
      {children}
    </BotaoLink>
  )
}

export default Botoes
