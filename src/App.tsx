import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Rotas from './routes'
import GlobalCss from './styles'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
