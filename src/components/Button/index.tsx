import {
  ButtonLink,
  ButtonContainer,
  ButtonAddToCart,
  ButtonLearnMore
} from './styles'

type Props = {
  type: 'button' | 'link' | 'addToCart' | 'readMore'
  title: string
  to: string
  onClick?: () => void
  children: string
}

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

  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
