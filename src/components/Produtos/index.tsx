import fotoDePizza from '../../images/pizza.png'
import Button from '../Button'
import { CardProduto, Titulo, Descricao } from './styles'
import Detalhes from '../Detalhes'
import { useState } from 'react'

function Produtos() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <CardProduto>
      <img src={fotoDePizza} alt="pizza" />
      <div className="conteudoCard">
        <Titulo>Pizza Marguerita</Titulo>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          onClick={() => setOpenModal(true)}
          type="readMoreProduct"
          title=""
          to=""
        >
          Saiba mais
        </Button>
      </div>
      <Detalhes isOpen={openModal} />
    </CardProduto>
  )
}

export default Produtos
