import { useContext } from "react";

import RentalItemForm from "./RentalItemForm";
import classes from "./RentalItem.module.css";
import CartContext from "../../store/cart-context";

const RentalItem = (props) => {
  //console.log("RentalItem", props);
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> &#8377;{price}</div>
      </div>
      <div>
        <RentalItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default RentalItem;
