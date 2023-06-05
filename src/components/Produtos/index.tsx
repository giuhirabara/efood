import fotoDePizza from '../../images/pizza.png'
import Button from '../Button'
import { CardProduto, Titulo, Descricao } from './styles'

const Produtos = () => (
  <CardProduto>
    <img src={fotoDePizza} alt="pizza" />
    <div className="conteudoCard">
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button type="addToCart" to="/Carrinho" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </div>
  </CardProduto>
)

export default Produtos
