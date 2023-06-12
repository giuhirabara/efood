import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <div className="container">
        <GlobalCss />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
