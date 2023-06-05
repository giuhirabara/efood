import Button from '../Button'
import { Card, Descricao, Titulo, Nota } from './styles'
import Tag from '../Tag'
import estrela from '../../images/star_favorite-[#1499].png'

type Props = {
  title: string
  category: string
  description: string
  image: string
  info: string
  nota: string
}

const Product = ({ title, category, description, image, nota }: Props) => (
  <Card>
    <img id="fotoComida" src={image} alt={title} />
    <div className="conteudoCard">
      <div className="containerTag">
        <Tag size="small">{category}</Tag>
      </div>
      <div className="title-wrapper">
        <Titulo>{title}</Titulo>
        <div className="title-section">
          <Nota>{nota}</Nota>
          <img id="favorito" src={estrela} alt="Favorito" />
        </div>
      </div>
      <Descricao>{description}</Descricao>
      <Button type="readMore" to="/Perfil" title="Clique para saber mais">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Product
