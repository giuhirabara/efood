import { useParams } from 'react-router-dom'
import Detalhes from '../../components/Detalhes'
import HeaderPrincipal from '../../components/HeaderPrincipal'

const Produto = () => {
  const { productId } = useParams()
  return (
    <div>
      <HeaderPrincipal />
      <Detalhes isOpen={true} />
    </div>
  )
}

export default Produto
