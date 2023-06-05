import { HeaderBar, Imagem, Home, HeaderContainer } from './styles'
import logo from '../../images/logo.svg'

const HeaderPrincipal = () => (
  <HeaderBar>
    <div className="container">
      <HeaderContainer>
        <Home href="/">Restaurantes</Home>
        <Imagem src={logo} alt="efood" />
        <p>0 produto(s) no carrinho</p>
      </HeaderContainer>
    </div>
  </HeaderBar>
)

export default HeaderPrincipal
