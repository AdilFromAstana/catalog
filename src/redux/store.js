import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import categoriesReducer from "./categorySlice";
import attributesReducer from "./attributesSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
    attributes: attributesReducer,
  },
});
