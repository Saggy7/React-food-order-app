import CartIcon from "../../UI/Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React from "react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [btnisHighlighted, setbtnisHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; //items is use to pull out the data(object) from cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnclasses = `${classes.button} ${
    btnisHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnisHighlighted(true);

   const timer = setTimeout(() => {
      setbtnisHighlighted(false);      
    }, 300);
    return () =>{
      clearTimeout(timer);
    }
  }, [items]);

  

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
