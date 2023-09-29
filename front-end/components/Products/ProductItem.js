import Card from '../UI/card';
import classes from './ProductItem.module.css';
import { useRouter } from 'next/router';

function ProductItem(props) {
  const router = useRouter();

  function cartButtonHandler() {
    router.push('/products/cart/cart');
  }
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
          <button onClick={cartButtonHandler}>Add to cart</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
