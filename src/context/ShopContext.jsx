import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Add item to the cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    setCartItems((prev) => {
      let updatedCart = { ...prev };

      if (!updatedCart[itemId]) {
        updatedCart[itemId] = {}; // If item doesn't exist, create an empty object
      }

      updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1; // Increase quantity

      return updatedCart;
    });
  };

  const getCartCount = () => {
    let count = 0;

    return Object.values(cartItems)
      .flatMap(Object.values) // Flatten all quantities into a single array
      .reduce((total, qty) => total + qty, 0); // Sum up all quantities
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      let updatedCart = { ...prev };

      if (updatedCart[itemId]?.[size] !== undefined) {
        updatedCart[itemId][size] = quantity; // Update quantity
      }

      return updatedCart;
    });
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      let item = products.find((p) => p._id === itemId);
      if (!item) return total; // If item not found, return current total

      let itemTotal = Object.values(sizes).reduce(
        (sum, qty) => sum + qty * item.price,
        0
      );

      return total + itemTotal;
    }, 0);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
