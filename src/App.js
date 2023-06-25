import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = ({ product, quantity }) => {
    if (cart.length === 0) {
      setCart([...cart, { ...product, id: Date.now(), quantity: quantity }]);
    } else {
      setCart(
        cart.map((el) =>
          el.title === product.title ? { ...el, quantity: quantity } : el
        )
      );
    }
  };

  const handleDelete = (idProd) => {
    setCart(cart.filter((item) => item.id !== idProd));
  };
  return (
    <>
      <Navbar cart={cart} handleDelete={handleDelete} />
      <Main handleAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
