import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProduto = styled.div`
  background-color: ${cores.corPincipal};
  padding: 8px;
  margin-bottom: 32px;
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 16px;
  color: ${cores.corSecundaria};
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.corSecundaria};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
`
export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
`
