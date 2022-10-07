import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const cartOpenHandler = () => {
    setCartVisible(true);
  }
  const cartCloseHandler = () => {
    setCartVisible(false);
  }

  return (
    <CartProvider>
      { isCartVisible && <Cart onCartClose={cartCloseHandler}/> }
      <Header onCartOpen={cartOpenHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
