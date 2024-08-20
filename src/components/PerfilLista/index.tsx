import PerfilTemplate from '../PerfilTemplate'
import { ContainerLista } from './styles'

const pratos = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  },
  {
    id: 2,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  },
  {
    id: 3,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  },
  {
    id: 5,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  },
  {
    id: 6,
    titulo: 'Pizza Marguerita',
    descricao: 'A clássica Marguerita...',
    imagem: 'path/to/pizza.png'
  }
]

const PerfilLista = () => (
  <ContainerLista className="container">
    {pratos.map((prato) => (
      <PerfilTemplate
        key={prato.id}
        titulo={prato.titulo}
        descricao={prato.descricao}
        imagem={prato.imagem}
      />
    ))}
  </ContainerLista>
)

export default PerfilLista
