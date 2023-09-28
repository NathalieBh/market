import Card from "../UI/card";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.price}</address>
        </div>
        <div className={classes.actions}>
          <button>Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
