import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import GlobalCss from './styles'
import Header from './components/Header'
import Banner from './components/Banner'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
