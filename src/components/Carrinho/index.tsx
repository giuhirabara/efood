import Item from '../../components/Item'
import { Container, Conteudo, Botao, CarrinhoContainer } from './styles'

type itemProps = {
  openCarrinho: boolean
}

const Carrinho = ({ openCarrinho }: itemProps) => {
  if (openCarrinho) {
    return (
      <CarrinhoContainer>
        <Container>
          <div>
            <Item />
            <Item />
            <Item />
          </div>
          <Conteudo>
            <p>Valor total</p>
            <p>R$ 182,70</p>
          </Conteudo>
          <Botao>Continuar com a entrega</Botao>
        </Container>
      </CarrinhoContainer>
    )
  }
  return null
}
export default Carrinho
