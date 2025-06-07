import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product ) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseFromCart =(product)=>{
    setCart((prevCart)=> prevCart.map((item)=>item.id === product.id ?{...item, quantity:item.quantity -1} :item).filter((item)=>item.quantity >0))
  }

  const removeFromCart = (productId) => {
    setCart((prevCart = prevCart.filter((item) => item.id !== productId)));
  };

  const value = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    removeFromCart,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
