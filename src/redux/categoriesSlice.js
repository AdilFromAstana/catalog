import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesByLevelAndParent } from "../api/categoriesApi";

const initialState = {
  firstLevelCategories: [],
  secondLevelCategories: [],
  thirdLevelCategories: [],
  selectedFirst: null,
  selectedSecond: null,
  selectedThird: null,
  breadcrumb: [
    {
      id: null,
      titleRu: "Все категории",
      level: 1,
      parentId: null,
      hasChild: true,
    },
  ],
  categories: [],
  level: 1,
  parentId: null,
  isLoading: false,
  searchQuery: "",
  popularCategories: [
    {
      id: 1001,
      fullPath: "Подарки > Подарочные наборы",
      titleRu: "Подарочные наборы",
    },
    { id: 1002, fullPath: "Цветы > Букеты из роз", titleRu: "Букеты из роз" },
    {
      id: 1003,
      fullPath: "Бытовая техника > Мелкая техника для кухни",
      titleRu: "Мелкая техника для кухни",
    },
    { id: 1004, fullPath: "Красота > Парфюмерия", titleRu: "Парфюмерия" },
  ],
  recentCategories: [
    {
      id: 2001,
      fullPath: "Аптека > Витамины > Иммунитет",
      titleRu: "Иммунитет",
    },
    {
      id: 2002,
      fullPath: "Красота > Косметика > Кремы для лица",
      titleRu: "Кремы для лица",
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setFirstLevelCategories(state, action) {
      state.firstLevelCategories = action.payload;
    },
    setSecondLevelCategories(state, action) {
      state.secondLevelCategories = action.payload;
    },
    setThirdLevelCategories(state, action) {
      state.thirdLevelCategories = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    selectFirst(state, action) {
      state.selectedFirst = action.payload;
      state.selectedSecond = null;
      state.selectedThird = null;
    },
    selectSecond(state, action) {
      state.selectedSecond = action.payload;
      state.selectedThird = null;
    },
    selectThird(state, action) {
      state.selectedThird = action.payload;
    },
    addBreadcrumb(state, action) {
      state.breadcrumb.push(action.payload);
    },
    removeLastBreadcrumb(state) {
      if (state.breadcrumb.length > 1) {
        state.breadcrumb.pop();
      }
    },
    resetBreadcrumb(state) {
      state.breadcrumb = [
        {
          id: null,
          titleRu: "Все категории",
          level: 1,
          parentId: null,
          hasChild: true,
        },
      ];
      state.level = 1;
      state.parentId = null;
    },
    setLevelAndParent(state, action) {
      state.level = action.payload.level;
      state.parentId = action.payload.parentId;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setFirstLevelCategories,
  setSecondLevelCategories,
  setThirdLevelCategories,
  setCategories,
  setLoading,
  selectFirst,
  selectSecond,
  selectThird,
  addBreadcrumb,
  removeLastBreadcrumb,
  resetBreadcrumb,
  setLevelAndParent,
  setSearchQuery,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

// ===== Async actions (thunks) =====
export const loadCategories = () => async (dispatch, getState) => {
  const { level, parentId } = getState().categories;
  try {
    dispatch(setLoading(true));
    const categories = await fetchCategoriesByLevelAndParent({
      level,
      parentId,
    });
    dispatch(setCategories(categories));
    if (level === 1) dispatch(setFirstLevelCategories(categories));
    if (level === 2) dispatch(setSecondLevelCategories(categories));
    if (level === 3) dispatch(setThirdLevelCategories(categories));
  } catch (error) {
    console.error("Ошибка загрузки категорий:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectCategory =
  ({ cat, form }) =>
  (dispatch) => {
    if (cat.hasChild) {
      dispatch(addBreadcrumb(cat));
      dispatch(setLevelAndParent({ level: cat.level + 1, parentId: cat.id }));
      dispatch(loadCategories());
      if (cat.level === 1) dispatch(selectFirst(cat));
      if (cat.level === 2) dispatch(selectSecond(cat));
      if (cat.level === 3) dispatch(selectThird(cat));
    } else {
      if (cat.level === 3) dispatch(selectThird(cat));
      if (form) form.setFieldValue("categoryId", cat.titleRu);
    }
  };

export const goBack = () => (dispatch, getState) => {
  const { breadcrumb } = getState().categories;
  if (breadcrumb.length <= 1) return;
  const newBreadcrumb = breadcrumb.slice(0, -1);
  const prev = newBreadcrumb[newBreadcrumb.length - 1];
  dispatch(removeLastBreadcrumb());
  dispatch(setLevelAndParent({ level: prev.level, parentId: prev.id }));
  dispatch(loadCategories());
};
