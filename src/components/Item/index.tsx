import pizza from '../../images/pizza.png'
import lixo from '../../images/lixeira.png'
import {
  ConteudoBotao,
  ItemContainer,
  Titulo,
  Preco,
  Botao,
  Imagem
} from './styles'

const Item = () => (
  <ItemContainer>
    <div>
      <Imagem src={pizza} alt="pizza" />
    </div>
    <div>
      <Titulo>Pizza Marguerita</Titulo>
      <Preco>R$ 60,90</Preco>
    </div>
    <ConteudoBotao>
      <Botao>
        <img src={lixo} alt="lixo" />
      </Botao>
    </ConteudoBotao>
  </ItemContainer>
)

export default Item
