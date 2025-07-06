import { useDispatch } from 'react-redux'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispath = useDispatch()

  const addToCart = () => {
    dispath(add(game))
    dispath(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              onClick={addToCart}
              title="Clique aqui para adicionar este jogo ao carrinho"
              type="button"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
