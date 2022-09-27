import CartIcon from "../Cart/CartIco";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>6</span>
        </button>
    );
}
export default HeaderCartButton;