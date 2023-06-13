import { useState } from 'react'
import {
  Container,
  ContainerSidbar,
  CampoA,
  CampoB,
  Label,
  Botao,
  Formulario,
  Titulo
} from './styles'
import Pagamento from '../Pagamento'

type EntregaProps = {
  SidBarOpen: boolean
}

const FormEntrega = ({ SidBarOpen }: EntregaProps) => {
  const [isPayOpen, setIsPayOpen] = useState(false)

  if (SidBarOpen) {
    return (
      <ContainerSidbar>
        <Container>
          <Titulo>Entrega</Titulo>
          <Formulario>
            <div className="form-group">
              <Label htmlFor="quemReceber">Quem irá receber</Label>
              <CampoA type="text" id="quemReceber" />
            </div>
            <div className="form-group">
              <Label htmlFor="endereco">Endereço</Label>
              <CampoA type="text" id="endereco" />
            </div>
            <div className="form-group">
              <Label htmlFor="cidade">Cidade</Label>
              <CampoA type="text" id="cidade" />
            </div>
            <div className="Grupo">
              <div className="form-group">
                <Label htmlFor="cep">CEP</Label>
                <CampoB type="number" id="cep" />
              </div>
              <div className="form-group">
                <Label htmlFor="numero">Número</Label>
                <CampoB type="number" id="numero" />
              </div>
            </div>
            <div className="form-group">
              <Label htmlFor="complemento">Complemento (opcional)</Label>
              <CampoA type="text" id="complemento" />
            </div>
          </Formulario>
          <Botao onClick={() => setIsPayOpen(true)}>
            Continuar com o pagamento
          </Botao>
          <Botao>Voltar para o carrinho</Botao>
        </Container>
        <Pagamento SidPayOpen={isPayOpen} />
      </ContainerSidbar>
    )
  }

  return null
}

export default FormEntrega
