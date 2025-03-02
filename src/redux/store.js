import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import categoriesReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
  },
});
