import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import Mealitem from "./Mealitem/Mealitem";
import React, { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals1, setmeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHttpError, setIsHttpError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-5fc5c-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();

      const mealdata = [];

      for (const key in responseData) {
        mealdata.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setmeals(mealdata);
      setIsLoading(false);
    };
  
    //This is not going to execute it 
    // try{
    //   fetchMeals();
    // }catch(error){
    //   setIsLoading(false);
    //   setIsHttpError(error.message);
    // }

    //Use this traditional way to handle the error inside of promise
        fetchMeals().catch((error) =>{
        setIsLoading(false);
        setIsHttpError(error.message);
      })
    
  }, []);
  if(isLoading){
    return( <section className={classes.mealsLoading}>
      <p>Super meals are on the way...</p>
    </section>)
  }

  if(isHttpError){
    return(<section className={classes.mealsError}>
      {isHttpError}
    </section>)
  }

  return (
    <div>
        <section className={classes.meals}>
          <Card>
            <ul>
              {meals1.map((meal) => (
                <Mealitem
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  desription={meal.description}
                  price={meal.price}
                />
              ))}
            </ul>
          </Card>
        </section>
      )
    </div>
  );
};

export default AvailableMeals;
