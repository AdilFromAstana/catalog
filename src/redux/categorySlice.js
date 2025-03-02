import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Асинхронное получение категорий
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ endPoint, level = 1, parentId = null, titleRu = "" }) => {
    const response = await api.get(`/${endPoint}`, {
      params: { level, parentId, titleRu },
    });
    return { level, parentId, categories: response.data };
  },
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: {}, // { [level]: { [parentId]: [...categories] } }
    status: "idle",
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      const { level, parentId, categories } = action.payload;
      if (!state.data[level]) {
        state.data[level] = {};
      }
      state.data[level][parentId] = categories;
    },

    // ✅ Очищает категории
    clearCategories: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { level, parentId, categories } = action.payload;
        if (!state.data[level]) {
          state.data[level] = {};
        }
        state.data[level][parentId] = categories;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getCategoriesByLevelAndParentId = (state, level, parentId) => {
  return state.categories.data[level]?.[parentId] || [];
};

export const { setCategories, clearCategories } = categorySlice.actions;

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
  },
});

export default store;
