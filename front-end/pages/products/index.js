// market/products/homePage
import productDetails from "../../components/Products/productDetails";
import ProductList from "../../components/Products/ProductList";

function HomePage() {
  return <ProductList products={productDetails} />;
}

export default HomePage;
