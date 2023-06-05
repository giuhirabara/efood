import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: ${cores.corPincipal} solid 1px;
  margin-bottom: 48px;
  margin-top: 80px;

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #favorito {
    margin-bottom: 16px;
    margin-left: 8px;
  }

  .Button {
    padding: 14px 12px;
  }

  #fotoComida {
    position: relative;
  }

  .containerTag {
    position: absolute;
    transform: translate(380px, -220px);
  }

  .conteudoCard {
    padding: 14px 12px;
  }
`
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 20px;
`
export const Nota = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`
