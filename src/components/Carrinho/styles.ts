import styled from 'styled-components'
import { cores } from '../../styles'

export const CarrinhoContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Container = styled.div`
  background-color: ${cores.corPincipal};
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 32px;
  width: 360px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
`
export const Conteudo = styled.div`
  display: flex;
  color: ${cores.corSecundaria};
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 32px;
`
export const Botao = styled.button`
  background-color: ${cores.corSecundaria};
  border: none;
  color: ${cores.corPincipal};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 93px;
  text-align: center;
  cursor: pointer;
`
