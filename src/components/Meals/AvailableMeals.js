import { DUMMY_MEALS } from "../../Data/Data";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((item)=>{
        return <li>{item.name}</li>
    });
    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
}
export default AvailableMeals;