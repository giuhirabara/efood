import { HeaderBar, Imagem, Home, HeaderContainer, Botao } from './styles'
import logo from '../../images/logo.svg'
import { useState } from 'react'
import Carrinho from '../Carrinho'

function HeaderPrincipal() {
  const [openCarrinho, setOpenCarrinho] = useState(false)

  return (
    <>
      <HeaderBar>
        <div className="container">
          <HeaderContainer>
            <Home href="/">Restaurantes</Home>
            <Imagem src={logo} alt="efood" />
            <Botao onClick={() => setOpenCarrinho(true)}>
              0 produto(s) no carrinho
            </Botao>
          </HeaderContainer>
        </div>
      </HeaderBar>
      <Carrinho openCarrinho={openCarrinho} />
    </>
  )
}

export default HeaderPrincipal
