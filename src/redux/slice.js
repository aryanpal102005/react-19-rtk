import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Save to localStorage
const saveCart = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const initialState = {
  cartItems: loadCart()
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exist = state.cartItems.find(i => i.id === action.payload.id);

      if (!exist) {
        state.cartItems.push(action.payload);
        saveCart(state.cartItems);
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      saveCart(state.cartItems);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;