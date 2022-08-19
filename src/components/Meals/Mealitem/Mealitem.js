import MealitemForm from "./MealitemForm";
import classes from './Mealitem.module.css';
import React from "react";

const Mealitem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desription}>{props.desription}</div>
        <div className={classes.price}> {price}</div>
      </div>
<MealitemForm/>

      <div>

      </div>
    </li>
  );
};

export default Mealitem;
