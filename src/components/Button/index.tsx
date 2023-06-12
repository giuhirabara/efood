import {
  ButtonLink,
  ButtonContainer,
  ButtonAddToCart,
  ButtonLearnMore,
  ButtonreadMoreProduct,
  ButtonClosed
} from './styles'

type Props = {
  type:
    | 'button'
    | 'link'
    | 'addToCart'
    | 'readMore'
    | 'readMoreProduct'
    | 'fechar'
  title: string
  to: string
  onClick?: () => void
  children: string
}

import close from '../../images/close.png'

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'addToCart') {
    return (
      <ButtonAddToCart type="button" title={title} onClick={onClick}>
        Adicionar ao Carrinho
      </ButtonAddToCart>
    )
  }

  if (type === 'readMore') {
    return (
      <ButtonLearnMore to={to} title={title}>
        Leia Mais
      </ButtonLearnMore>
    )
  }

  if (type === 'fechar') {
    return (
      <ButtonClosed to={to} title={title}>
        <img src={close} alt="fechar" />
      </ButtonClosed>
    )
  }

  if (type === 'readMoreProduct') {
    return (
      <ButtonreadMoreProduct
        to={to}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonreadMoreProduct>
    )
  }

  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
