import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
import api from '../../services/api'
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
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={gamesLuta} title="Luta" background="black" />
        <ProductsList games={gamesRPG} title="RPG" background="gray" />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
