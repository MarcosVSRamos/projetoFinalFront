import Button from '../Button'
import {
  CardContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CardContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
              <button type="button" />
            </div>
          </CartItem>
        </ul>
        <Quantity>2 Jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CardContainer>
  )
}

export default Cart
