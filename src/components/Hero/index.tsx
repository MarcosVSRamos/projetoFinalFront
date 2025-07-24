import { useDispatch } from 'react-redux'

import Tag from '../Tag'
import Button from '../Button'

import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import { Banner, Infos } from './styles'
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
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>por {parseToBrl(game.prices.current)}</>}
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
