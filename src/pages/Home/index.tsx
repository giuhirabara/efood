import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { GlobalCss } from '../../styles'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <GlobalCss />
      <ProductsList />
    </div>
  </>
)

export default Home
