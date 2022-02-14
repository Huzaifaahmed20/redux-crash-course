import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item["quantity"] = action.payload.quantity;
    },
    removeItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = filteredItems;
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
