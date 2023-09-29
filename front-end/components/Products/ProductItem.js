import Card from "../UI/card";
import classes from "./ProductItem.module.css";
import { useRouter } from "next/router";

function ProductItem(props) {
  const router = useRouter();

  function orderButtonHandler() {
    router.push("/" + props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.price}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={orderButtonHandler}>Order</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
