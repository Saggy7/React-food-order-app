import React from "react";
import Input from "../../../UI/Input";
import classes from "./MealitemForm.module.css";
import { useRef, useState } from "react";

const MealitemForm = (props) => {
  const amountInputRef = useRef();

  const [isAmountValid, setisAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //this will stored in string format
    const enteredAmountNumber = +enteredAmount; // Adding plus sign is going to convert string into number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setisAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  //const confirmerMessage = () =>{
    //alert('Added');
  //}
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add </button>
      {!isAmountValid && <p>Please eneter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealitemForm;
