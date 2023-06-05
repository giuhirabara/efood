import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <div className="container">
        <GlobalCss />
      </div>
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
