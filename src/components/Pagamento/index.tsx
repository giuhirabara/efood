import Mensagem from '../Mensagem'
import {
  Botao,
  Container,
  ContainerSidbar,
  Titulo,
  CampoA,
  CampoB,
  Label,
  Formulario
} from './styles'
import { useState } from 'react'

type PagamentoProps = {
  SidPayOpen: boolean
}

const Pagamento = ({ SidPayOpen }: PagamentoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (SidPayOpen) {
    return (
      <ContainerSidbar>
        <Container>
          <Titulo>Pagamento - Valor a pagar R$ 190,90</Titulo>
          <Formulario>
            <div className="form-group">
              <Label>Nome no cartão</Label>
              <CampoA type="text" />
            </div>
            <div className="Grupo">
              <div className="form-group">
                <Label>Número do cartão</Label>
                <CampoB type="number" />
              </div>
              <div className="form-group">
                <Label>CVV</Label>
                <CampoB type="number" />
              </div>
            </div>
            <div className="Grupo">
              <div className="form-group">
                <Label>Mês de vencimento</Label>
                <CampoB type="text" />
              </div>
              <div className="form-group">
                <Label>Ano de vencimento</Label>
                <CampoB type="number" />
              </div>
            </div>
          </Formulario>
          <Botao onClick={() => setIsModalOpen(true)}>
            Finalizar pagamento
          </Botao>
          <Botao>Voltar para a edição de endereço</Botao>
        </Container>
        <Mensagem SidMsgOpen={isModalOpen} />
      </ContainerSidbar>
    )
  }

  return null
}

export default Pagamento
