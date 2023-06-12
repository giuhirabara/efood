import styled from 'styled-components'
import { cores } from '../../styles'

export const ItemContainer = styled.div`
  background-color: ${cores.corSecundaria};
  margin-bottom: 16px;
  display: flex;
  width: 344px;
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 18px;
  display: flex;
  margin-bottom: 16px;
  margin-top: 8px;
`

export const Preco = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 9px;
`

export const Botao = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin: 8px;
`
export const Imagem = styled.img`
  margin: 8px;
  width: 80px;
  height: 80px;
  object-fit: cover;
`
export const ConteudoBotao = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
  margin-top: auto;
`
