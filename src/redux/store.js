import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    categories: categoriesReducer,
  },
});
