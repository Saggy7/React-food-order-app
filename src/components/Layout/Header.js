import { Fragment } from "react";
import React from "react";
//import mealimage from '../Assets/Meal2.png';
import mealImage from '../../Assets/Meal2.png' ;
import HeaderCartButton from "./HeaderCartButton";
import './Header.css';

const Header = (props) =>{
    return ( 
        <Fragment>
        <header className="header">
            <h1>Cafe Tapari</h1>
            <HeaderCartButton  onClick=
            {props.onShowCart}/>
        </header>
        <div className="main-image">
            <img  src={mealImage} alt="A table full of snacks" width={1260} height={300} ></img> 
        </div>
        </Fragment>
    )
        
    

};
export default Header;