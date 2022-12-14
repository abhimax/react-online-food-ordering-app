import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
const loadedMeals = [];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(()=>{
    const  getMealsData = async () => {
      setLoading(true);
      const response = await fetch('https://movie-http-c62a0-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error("Something went wrong!");
      }
      const mealData = await response.json();
      for( const key in mealData){
        loadedMeals.push({
          id: key,
          name: mealData[key].name,
          description: mealData[key].description,
          price: mealData[key].price,
        });
      }
      
      setMeals(loadedMeals);
      setLoading(false);
    }
      getMealsData().catch((error) => {
        setLoading(false);
        setHttpError(error.message);
      });

    
  },[]);
  if(isLoading){
    return(<section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>);
  }
  if(httpError){
    return(<section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>);

  }
  const mealsList = meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
