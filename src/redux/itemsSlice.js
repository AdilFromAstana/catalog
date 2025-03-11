import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    tempFilters: {}, // 👈 Добавили tempFilters в хранилище
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setItemsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetItems: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.tempFilters[key] = state.tempFilters[key]?.includes(value)
        ? state.tempFilters[key].filter((item) => item !== value)
        : [...(state.tempFilters[key] || []), value];
    },
    resetFilter: (state, action) => {
      const { key } = action.payload;
      state.tempFilters[key] = [];
    },
    resetAllFilters: (state) => {
      state.tempFilters = {};
    },
  },
});

export const {
  setItems,
  resetItems,
  setFilter,
  resetFilter,
  resetAllFilters,
  setItemsLoading,
} = itemSlice.actions;
export default itemSlice.reducer;
