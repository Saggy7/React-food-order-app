import MealitemForm from "./MealitemForm";
import classes from "./Mealitem.module.css";
import React from "react";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

const Mealitem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;

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
        <div className={classes.desription}>{props.desription}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <MealitemForm onAddToCart={addToCartHandler} />

      <div></div>
    </li>
  );
};

export default Mealitem;
