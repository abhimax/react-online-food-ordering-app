import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const cartOpenHandler = () => {
    console.log('cartVisibleHandler');
    setCartVisible(true);
  }
  const cartCloseHandler = () => {
    setCartVisible(false);
  }

  return (
    <>
      { isCartVisible && <Cart onCartClose={cartCloseHandler}/> }
      <Header onCartOpen={cartOpenHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
