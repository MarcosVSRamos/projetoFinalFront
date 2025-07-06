import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getEsportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSumulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFigthGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRPGGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeatureGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFigthGamesQuery,
  useGetRPGGamesQuery,
  useGetSumulationGamesQuery,
  useGetGameQuery
} = api

export default api
