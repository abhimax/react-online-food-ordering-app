import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
const Cart = ({onCartClose}) => {


  const cartCtx = useContext(CartContext);
  //const totalAmount = cartCtx.totalAmount;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log('cartContext.totalAmount >>',cartCtx.totalAmount)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        console.log('item >>',item)
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onCartClose={onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
