import bannerImage from "../../assets/food-banner.jpeg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCardButton";
const Header = props => {
    return <>
    <header className={classes.header}>
        <h1>Abhiman's Restaurant</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={bannerImage} alt="A table full of delicious food!"/>
    </div>
    </>
}
export default Header;