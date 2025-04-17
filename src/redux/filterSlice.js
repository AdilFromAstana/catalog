import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  filters: {},
  filteredItems: [],
  filteredOptions: {},
  initialFiltersState: {},
  firstSelectedFilter: null,
  sortOrder: "default", // asc | desc | default
  priceRange: { min: 0, max: 0 },
};

// Вспомогательная функция для фильтрации и сортировки
function applyFiltersAndSorting(state) {
  const { allItems, filters, sortOrder } = state;

  let filtered = allItems.filter((item) =>
    Object.entries(filters).every(([param, values]) => {
      if (param === "price") return true; // цену фильтруем отдельно
      return values.length
        ? values.some((v) =>
            Array.isArray(item[param])
              ? item[param].includes(v)
              : item[param] === v,
          )
        : true;
    }),
  );

  if (filters.price) {
    const [min, max] = filters.price;
    filtered = filtered.filter(
      (item) => item.price >= min && item.price <= max,
    );
  }

  if (sortOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initializeData: (state, action) => {
      const { items, filters } = action.payload;

      const allPrices = items.flatMap((item) => [
        item.price,
        item.originalPrice,
      ]);
      const min = Math.min(...allPrices);
      const max = Math.max(...allPrices);

      const priceFilter = {
        name: "Цена",
        range: { min, max },
      };

      state.filteredOptions = {
        ...filters,
        price: priceFilter,
      };

      state.initialFiltersState = {
        ...JSON.parse(JSON.stringify(filters || {})),
        price: JSON.parse(JSON.stringify(priceFilter)), // обязательно добавить
      };
      state.allItems = items;
      state.filteredItems = items;
      state.filters = {};
      state.firstSelectedFilter = null;
      state.priceRange = { min, max };
      state.sortOrder = "default";
    },

    updateFilter: (state, action) => {
      const { param, values } = action.payload;

      if (!state.firstSelectedFilter) {
        state.firstSelectedFilter = param;
        state.initialFiltersState = state.filteredOptions
          ? JSON.parse(JSON.stringify(state.filteredOptions))
          : {};
      }

      state.filters[param] = values.length ? values : [];

      state.filteredItems = applyFiltersAndSorting(state);

      // Пересчёт доступных фильтров
      state.filteredOptions = Object.keys(state.initialFiltersState).reduce(
        (acc, key) => {
          const filterConfig = state.initialFiltersState[key];
          acc[key] = { ...filterConfig };

          if (filterConfig.options) {
            acc[key].options = filterConfig.options
              .map((option) => ({
                ...option,
                count: state.filteredItems.filter((item) =>
                  Array.isArray(item[key])
                    ? item[key].includes(option.value)
                    : item[key] === option.value,
                ).length,
              }))
              .filter((option) => option.count > 0);
          }

          return acc;
        },
        {},
      );

      const priceList = state.filteredItems.map((item) => item.price);
      const minPrice = priceList.length ? Math.min(...priceList) : 0;
      const maxPrice = priceList.length ? Math.max(...priceList) : 0;

      state.filteredOptions.price = {
        name: "Цена",
        range: { min: minPrice, max: maxPrice },
      };

      if (state.firstSelectedFilter) {
        state.filteredOptions[state.firstSelectedFilter] =
          state.initialFiltersState[state.firstSelectedFilter];
      }
    },

    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.filters.price = [min, max];
      state.filteredItems = applyFiltersAndSorting(state);
    },

    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
      state.filteredItems = applyFiltersAndSorting(state);
    },

    resetFilters: (state) => {
      state.filters = {};
      state.filteredItems = state.allItems;
      state.filteredOptions = JSON.parse(
        JSON.stringify(state.initialFiltersState),
      );
      state.firstSelectedFilter = null;
      state.sortOrder = "default";

      const allPrices = state.allItems.flatMap((item) => [
        item.price,
        item.originalPrice,
      ]);
      state.priceRange = {
        min: Math.min(...allPrices),
        max: Math.max(...allPrices),
      };
    },
  },
});

export const {
  initializeData,
  updateFilter,
  resetFilters,
  setSortOrder,
  setPriceRange,
} = filterSlice.actions;

export default filterSlice.reducer;
