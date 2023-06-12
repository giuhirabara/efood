import styled from 'styled-components'
import fundo from '../../images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.div`
  background-image: url(${fundo});
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Home = styled.a`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.corPincipal};
`

export const Titulo = styled.h1`
  font-size: 36px;
`
export const Imagem = styled.img`
  margin-bottom: 64.5px;
  margin-top: 48px;
`
export const Botao = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.corPincipal};
  cursor: pointer;
`
