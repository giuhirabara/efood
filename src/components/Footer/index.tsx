import logo from '../../images/logo.svg'
import redesSociais from '../../images/redes sociais.png'
import { Container, Logo, Apps, Rodape } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <Apps>
        <img src={redesSociais} alt="redes sociais" />
      </Apps>
      <Rodape>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Rodape>
    </div>
  </Container>
)

export default Footer
