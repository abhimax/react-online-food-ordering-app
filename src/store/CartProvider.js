import CartContext from "./cart-context";
const addItemToCartHandler = (item) => {};
const removeItemFromCartHandler = (id) => {};

const cartContext = {
  items: [],
  total: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
};
const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
