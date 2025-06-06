import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      veritatis dolore temporibus eum, facilis odio quo cum commodi eveniet
      quibusdam magni repellat repudiandae inventore quis beatae dolor sint
      ipsam voluptate.
    </Descricao>
  </Card>
)

export default Product
