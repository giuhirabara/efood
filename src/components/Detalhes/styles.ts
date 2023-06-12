import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 0;
  background-color: ${cores.corPincipal};
  color: ${cores.corSecundaria};
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(52%, -50%);
`
export const ContainerBanner = styled.div`
  margin-top: 24px;
  margin-right: 32px;
`
export const Texto = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
`
export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;
`
export const Imagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-top: 24px;
  margin-left: 32px;
  margin-bottom: 24px;
  margin-right: 24px;
`
export const Botao = styled.div`
  display: flex;
  justify-content: space-between;
`
