import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#FFF8F2',
  corPincipal: '#E66767',
  corSecundaria: '#FFEBD9',
  branco: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.corPincipal};

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
}
`
