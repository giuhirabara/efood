import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.corPincipal};
  color: ${cores.corSecundaria};
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  border: none;
`

export const ButtonAddToCart = styled.button`
  background-color: ${cores.corSecundaria};
  color: ${cores.corPincipal};
  padding: 4px 83px;
  border: none;
  font-weight: 700;
  font-size: 14px;
`

export const ButtonLearnMore = styled(Link)`
  background-color: ${cores.corPincipal};
  color: ${cores.corSecundaria};
  border: none;
  padding: 4px 6px;
  text-decoration: none;
`
