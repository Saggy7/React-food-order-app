import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import Mealitem from "./Mealitem/Mealitem";
import React from "react";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Pavbhaji",
    price: 50,
    description: "Spicy and hot",
  },
  {
    id: 2,
    name: "KandaPohe",
    price: 30,
    description: "Spicy and hot",
  },
  {
    id: 3,
    name: "MisalPav",
    price: 60,
    description: "Spicy and hot",
  },
  {
    id: 4,
    name: "Vadapav",
    price: 15,
    description: "Spicy and hot",
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meals) => (
            <Mealitem
              key={meals.id}
              id ={meals.id}
              name={meals.name}
              desription={meals.description}
              price={meals.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
