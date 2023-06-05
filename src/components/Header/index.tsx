import { HeaderBar, Titulo, Imagem } from './styles'
import logo from '../../images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Imagem src={logo} alt="efood" />
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header
