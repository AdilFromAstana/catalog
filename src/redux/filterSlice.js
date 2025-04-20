import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  filters: {},
  filteredItems: [],
  filteredOptions: {},
  initialFiltersState: {},
  firstSelectedFilter: null,
  sortOrder: "default",
  priceRange: { min: 0, max: 0 },
};

function applyFiltersAndSorting(state) {
  const { allItems, filters, sortOrder } = state;

  let filtered = allItems.filter((item) =>
    Object.entries(filters).every(([param, values]) => {
      if (param === "price") return true;

      const itemValue = item[param];

      if (Array.isArray(itemValue)) {
        // Если массив объектов с value/title
        const extractedValues = itemValue.map((el) =>
          typeof el === "object" ? el.value || el.code || el.title : el,
        );
        return values.some((v) => extractedValues.includes(v));
      }

      return values.includes(itemValue);
    })
  );

  if (filters.price) {
    const [min, max] = filters.price;
    filtered = filtered.filter(
      (item) => item.price >= min && item.price <= max
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

      const fullFilters = {
        ...filters,
        price: priceFilter,
      };

      state.initialFiltersState = fullFilters;
      state.filteredOptions = JSON.parse(JSON.stringify(fullFilters));

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

      if (values.length) {
        state.filters[param] = values;
      } else {
        delete state.filters[param]; // удаляем фильтр, если пустой
      }

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
                    ? item[key].some((el) =>
                      typeof el === "object"
                        ? el.value === option.value || el.title === option.value || el.code === option.value
                        : el === option.value
                    )
                    : item[key] === option.value
                ).length,
              }))
              .filter((option) => option.count > 0);
          }

          return acc;
        },
        {},
      );

      const allPrices = state.allItems.map((item) => item.price);
      const minPrice = allPrices.length ? Math.min(...allPrices) : 0;
      const maxPrice = allPrices.length ? Math.max(...allPrices) : 0;

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
      const sort = action.payload;
      state.sortOrder = sort;

      const { by, order } = sort;

      if (order === "asc" || order === "desc") {
        state.filteredItems = [...state.filteredItems].sort((a, b) => {
          const aVal = a[by];
          const bVal = b[by];

          if (typeof aVal === "string") {
            return order === "asc"
              ? aVal.localeCompare(bVal)
              : bVal.localeCompare(aVal);
          }

          return order === "asc" ? aVal - bVal : bVal - aVal;
        });
      }
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
