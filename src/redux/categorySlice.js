import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [], // Все загруженные категории
    selectedCategory: null, // Текущая выбранная категория
    categoryPath: [], // История навигации по категориям
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.categoryPath.push(action.payload); // Добавляем в иерархию
      state.selectedCategory = action.payload; // Сохраняем выбранную категорию
    },
    goBackCategory: (state) => {
      if (state.categoryPath.length > 0) {
        state.categoryPath.pop(); // Удаляем последний элемент из истории
        state.selectedCategory =
          state.categoryPath[state.categoryPath.length - 1] || null; // Возвращаемся на предыдущий уровень
      }
    },
    resetCategories: (state) => {
      state.selectedCategory = null;
      state.categoryPath = [];
    },
  },
});

export const {
  setCategories,
  selectCategory,
  goBackCategory,
  resetCategories,
} = categorySlice.actions;
export default categorySlice.reducer;
