import Produtos from '../Produtos'
import { ContainerProdutos } from './styles'

const ListaDeProdutos = () => (
  <div className="container">
    <ContainerProdutos>
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
    </ContainerProdutos>
  </div>
)

export default ListaDeProdutos
