import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIco";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = ({ onClick }) => {
  const CartCtx = useContext(CartContext);
  let { items } = CartCtx;
  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [isBtnBump, setBtnBump] = useState(false);
  const btnClass = `${classes.button} ${isBtnBump && classes.bump}`;
  useEffect(() => {
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
