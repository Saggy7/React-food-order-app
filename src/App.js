import "./App.css";
import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import React from "react";
import Cart from "./UI/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [isCartShown, setisCartShown] = useState(false);

  const cartShowHandler = () => {
    setisCartShown(true);
  };

  const cartHideHandler = () =>{
    setisCartShown(false);

  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart = {cartHideHandler}/> }
      <Header onShowCart ={cartShowHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
