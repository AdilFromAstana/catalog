import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    resetItems: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setItems, resetItems } = itemSlice.actions;
export default itemSlice.reducer;
