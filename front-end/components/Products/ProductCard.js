import Card from '../UI/card';
import classes from './ProductCard.module.css';
import productDetails from './ProductDetails';
function ProductCard(props) {
  function paymentButtonHandler() {}
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={product.props.image} alt={product.props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.product.name}</h3>
          <h4>{props.product.price}</h4>
        </div>
        <div className={classes.actions}>
          <button onClick={paymentButtonHandler}>Payment</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
