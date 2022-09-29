import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIco";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = ({onClick}) => {
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount},0);
    return(
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}
export default HeaderCartButton;