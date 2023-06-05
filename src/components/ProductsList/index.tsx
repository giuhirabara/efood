import Product from '../Product'
import { Container, List } from './styles'
import ComidaJaponesa from '../../images/imagem.svg'
import ComidaItaliana from '../../images/image 1.svg'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          title={'Hioki Sushi'}
          category={'Japonesa'}
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          image={`${ComidaJaponesa}`}
          info={'Destaque da semana'}
          nota={'4.9'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          category={'Italiana'}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          image={`${ComidaItaliana}`}
          info={''}
          nota={'4.6'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          category={'Italiana'}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          image={`${ComidaItaliana}`}
          info={''}
          nota={'4.6'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          category={'Italiana'}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          image={`${ComidaItaliana}`}
          info={''}
          nota={'4.6'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          category={'Italiana'}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          image={`${ComidaItaliana}`}
          info={''}
          nota={'4.6'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          category={'Italiana'}
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          image={`${ComidaItaliana}`}
          info={''}
          nota={'4.6'}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
