import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerSidbar = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .Grupo {
    display: flex;
    justify-content: space-between;
  }
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
export const CampoA = styled.input`
  width: 344px;
  background-color: ${cores.corSecundaria};
  border: none;
  height: 32px;
  color: #4b4b4b;
  font-style: normal;
  font-weight: 700;
  padding: 8px;
`
export const CampoB = styled.input`
  width: 155px;
  height: 32px;
  background-color: ${cores.corSecundaria};
  border: none;
  color: #4b4b4b;
  font-style: normal;
  font-weight: 700;
  padding: 8px;
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
`
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
export const Formulario = styled.form`
  margin-bottom: 24px;
`
export const Titulo = styled.h1`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
`
