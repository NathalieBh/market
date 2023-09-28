// domain.com/
// user login

import ProductList from "../components/Products/ProductList";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Pasta",
    price: "3,5€",
    Image: "https://lenervee.com/images/courriers/pasta-box.png",
  },
  {
    id: "p2",
    title: "Cheese",
    price: "3.9€",
    Image:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/cheese-box-NxE7AJ8-600.jpg",
  },
];

function HomePage() {
  return <ProductList products={DUMMY_PRODUCTS} />;
}

export default HomePage;
