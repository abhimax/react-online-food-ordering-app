import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);
  const mealPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
