import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ✅ ADD ITEM
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.cartItems.find(
        (i) => i.id === id
      );

      if (item) {
        item.quantity += amount;

        // Remove if quantity becomes 0 or less
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
