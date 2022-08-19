import CartIcon from "../../UI/Cart/CartIcon";
import './HeaderCartButton.css';
import React from "react";

const HeaderCartButton = (props) =>{
    return <button className="button">

    <span className="icon"> <CartIcon/></span>
    <span>Your Cart</span>
    <span className="badge"></span>
</button>

}
export default HeaderCartButton;