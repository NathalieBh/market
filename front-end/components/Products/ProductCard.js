import Card from '../UI/card';
import classes from './ProductCard.module.css';

function ProductCard(props) {
  function paymentButtonHandler() {}
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <h4>{props.price}</h4>
        </div>
        <div className={classes.actions}>
          <button onClick={paymentButtonHandler}>Payment</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
