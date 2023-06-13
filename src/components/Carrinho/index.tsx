import { useState } from 'react'
import Item from '../../components/Item'
import { Container, Conteudo, Botao, CarrinhoContainer } from './styles'
import FormEntrega from '../Entrega'

type itemProps = {
  openCarrinho: boolean
}

const Carrinho = ({ openCarrinho }: itemProps) => {
  const [abrirSidBar, setSidBarOpen] = useState(false)

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
          <Botao onClick={() => setSidBarOpen(true)}>
            Continuar com a entrega
          </Botao>
        </Container>
        <FormEntrega SidBarOpen={abrirSidBar} />
      </CarrinhoContainer>
    )
  }
  return null
}
export default Carrinho
