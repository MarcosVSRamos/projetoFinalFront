import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFigthGamesQuery,
  useGetRPGGamesQuery,
  useGetSumulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsports } =
    useGetEsportsGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFigthGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRpg } = useGetRPGGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSumulationGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingEsports}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
