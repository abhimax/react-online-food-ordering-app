import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onCartClose }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDidSubmit, setIsDidSubmit] = useState(false);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const onOrderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    console.log("SUBMIT HANDLER!", userData);
    setIsSubmitting(true);
    await fetch("https://movie-http-c62a0-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ 
        user: userData,
        orderedItems: cartCtx.items
      }),
    });
    setIsSubmitting(false);
    setIsDidSubmit(true);
    cartCtx.clearItems();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCartClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={onOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = <>
  {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={onCartClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
  </>;
  const submittingContent = <p>Submitting data...</p>
  const didSubmitContent = <><p className={classes.success}>Successfully Submitted.</p>
      <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCartClose}>
        Close
      </button>
    </div>
  </>

  return (
    <Modal onCartClose={onCartClose}>
      { !isSubmitting && !isDidSubmit && modalContent}
      { isSubmitting && submittingContent}
      { isDidSubmit && !isSubmitting && didSubmitContent}
    </Modal>
  );
};
export default Cart;
