import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const Checkout = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isSixCharLong = (value) => value.trim().length === 6;

  const [formInputValidity, setformInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalcode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const enteredcity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const isNameValid = isNotEmpty(enteredname);
    const isAddressValid = isNotEmpty(enteredaddress);
    const isCityValid = isNotEmpty(enteredcity);
    const isPostalCodeValid = isSixCharLong(enteredPostalCode);

    const isFormValid =
      isAddressValid && isCityValid && isNameValid && isPostalCodeValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
        name:enteredname,
        address: enteredaddress,
        city: enteredcity,
        postalcode: enteredPostalCode
    })

    setformInputValidity({
      name: isNameValid,
      address: isAddressValid,
      city: isCityValid,
      postalcode: isPostalCodeValid,
    });
  };


  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name1" ref={nameInputRef} />
        {!formInputValidity.name && <p>Enter the valid name</p>}
      </div>

      <div  className={`${classes.control} ${
          formInputValidity.address ? "" : classes.invalid
        }`}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Enter the valid address</p>}
      </div>

      <div  className={`${classes.control} ${
          formInputValidity.postalcode ? "" : classes.invalid
        }`}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={cityInputRef} />
        {!formInputValidity.postalcode && (
          <p>Enter the valid 6 digit postal code</p>
        )}
      </div>

      <div className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={postalCodeInputRef} />
        {!formInputValidity.city && <p>Enter the valid city name</p>}
      </div>

      <div className={classes.actions}>
        <button type= "submit" className={classes.submit} >Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
