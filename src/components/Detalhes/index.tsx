import {
  Banner,
  Texto,
  Titulo,
  ContainerBanner,
  Imagem,
  Botao,
  BannerDiv
} from './styles'
import pizza from '../../images/pizza.png'
import Button from '../Button'
import { useState } from 'react'

type DetalhesProps = {
  isOpen: boolean
}

const Detalhes = ({ isOpen }: DetalhesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  if (isOpen) {
    return (
      <BannerDiv>
        <Banner>
          <Imagem src={pizza} alt="pizza" />
          <ContainerBanner>
            <Botao>
              <Titulo>Pizza Marguerita</Titulo>
              <Button
                onClick={handleCloseModal}
                type="fechar"
                to=""
                title="Fechar a página"
              >
                x
              </Button>
            </Botao>
            <Texto>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br />
              Serve: de 2 a 3 pessoas
            </Texto>
            <Button
              type="addToCart"
              to="/carrinho"
              title="Adcionar ao carrinho"
            >
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </ContainerBanner>
        </Banner>
      </BannerDiv>
    )
  }

  return null
}

export default Detalhes
