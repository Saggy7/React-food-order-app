import { Fragment } from "react";
import React from "react";
import mealImage from "../../Assets/Meal2.png";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <Header className="header">
        <h1>Cafe Tapari</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </Header>
      <div className="main-image">
        <img
          src={mealImage}
          alt="A table full of snacks"
          width={1260}
          height={300}
        ></img>
      </div>
    </Fragment>
  );
};
export default Header;
