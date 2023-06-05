import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corPincipal};
  color: ${cores.corSecundaria};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 4px')};
  width: 61px;
  text-align: center;
`
