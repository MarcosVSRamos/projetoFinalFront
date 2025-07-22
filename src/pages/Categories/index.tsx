import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFigthGamesQuery,
  useGetRPGGamesQuery,
  useGetSumulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetEsportsGamesQuery()
  const { data: gamesLuta } = useGetFigthGamesQuery()
  const { data: gamesRPG } = useGetRPGGamesQuery()
  const { data: gamesSimulacao } = useGetSumulationGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={gamesRPG} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
