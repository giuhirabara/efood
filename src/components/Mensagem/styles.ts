import styled from 'styled-components'
import { cores } from '../../styles'

export const Botao = styled.button`
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${cores.corSecundaria};
  border: none;
  color: ${cores.corPincipal};
  padding: 4px 82px;
  width: 344px;
  cursor: pointer;
`
export const ContainerSidbar = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const Container = styled.div`
  background-color: ${cores.corPincipal};
  color: ${cores.corSecundaria};
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 32px;
  width: 360px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
`
export const Titulo = styled.h1`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`
export const Texto = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 24px;
`
