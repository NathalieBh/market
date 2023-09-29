import productDetails from '../../components/Products/productDetails';
import ProductList from '../../components/Products/ProductList';

function HomePage(props) {
  return <ProductList products={productDetails} />;
}

export default HomePage;
