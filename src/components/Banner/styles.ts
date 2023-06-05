import styled from 'styled-components'
import bannerImage from '../../images/fundoBanner.png'
import { cores } from '../../styles'

export const ContainerBanner = styled.div`
  background-image: url(${bannerImage});
  color: ${cores.branco};
  background-size: cover;
`

export const Titulo = styled.h1`
  padding-top: 24px;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 156.5px;
`

export const Nome = styled.h1`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  padding-bottom: 32px;
`
