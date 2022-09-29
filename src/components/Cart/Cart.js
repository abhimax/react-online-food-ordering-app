import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = ({onCartClose}) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 13.25 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onCartClose={onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
