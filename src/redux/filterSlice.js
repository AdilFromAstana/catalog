import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  filters: {},
  filteredItems: [],
  filteredOptions: {},
  initialFiltersState: {},
  firstSelectedFilter: null,
  sortOrder: { by: "price", order: "default", value: "default" },
  priceRange: { min: 0, max: 0 },
  totalItems: 0, // ✅ ДОБАВИЛ totalItems
};

function applyFiltersAndSorting(state) {
  const { allItems, filters, sortOrder } = state;

  let filtered = allItems.filter((item) =>
    Object.entries(filters).every(([param, values]) => {
      if (param === "price") return true;

      const itemValue = item[param];

      if (Array.isArray(itemValue)) {
        const extractedValues = itemValue.map((el) =>
          typeof el === "object" ? el.value || el.code || el.title : el
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

  const { by, order } = sortOrder || {};
  if (by && (order === "asc" || order === "desc")) {
    filtered.sort((a, b) => {
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

  return filtered;
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initializeData: (state, action) => {
      const { items, filtersData, totalItems } = action.payload;
      // ✅ Теперь здесь принимаем и totalItems

      state.allItems = items;
      state.filteredItems = items;
      state.filters = {};
      state.firstSelectedFilter = null;

      state.priceRange = {
        min: filtersData?.minPrice || 0,
        max: filtersData?.maxPrice || 0,
      };

      const attributesFilters = {};
      for (const [code, attr] of Object.entries(filtersData?.attributes || {})) {
        attributesFilters[code] = {
          name: attr.titleRu,
          options: attr.values.map((v) => ({
            value: v.value,
            count: v.count,
          })),
        };
      }

      state.initialFiltersState = {
        ...attributesFilters,
        price: {
          name: "Цена",
          range: {
            min: filtersData?.minPrice || 0,
            max: filtersData?.maxPrice || 0,
          },
        },
      };

      state.filteredOptions = JSON.parse(
        JSON.stringify(state.initialFiltersState)
      );

      state.sortOrder = { by: "price", order: "default", value: "default" };
      state.totalItems = totalItems || 0; // ✅ сохраняем сюда общее количество товаров
    },

    updateFilter: (state, action) => {
      const { param, values } = action.payload;

      if (!state.firstSelectedFilter) {
        state.firstSelectedFilter = param;
        state.initialFiltersState = JSON.parse(
          JSON.stringify(state.filteredOptions)
        );
      }

      if (values.length) {
        state.filters[param] = values;
      } else {
        delete state.filters[param];
      }

      state.filteredItems = applyFiltersAndSorting(state);

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
                        ? el.value === option.value ||
                        el.title === option.value ||
                        el.code === option.value
                        : el === option.value
                    )
                    : item[key] === option.value
                ).length,
              }))
              .filter((option) => option.count > 0);
          }

          return acc;
        },
        {}
      );

      const prices = state.filteredItems.map((item) => item.price);
      state.filteredOptions.price = {
        name: "Цена",
        range: {
          min: prices.length ? Math.min(...prices) : 0,
          max: prices.length ? Math.max(...prices) : 0,
        },
      };
    },

    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.filters.price = [min, max];
      state.filteredItems = applyFiltersAndSorting(state);
    },

    setSortOrder: (state, action) => {
      const sort = action.payload; // { by, order, value }
      state.sortOrder = sort;
      state.filteredItems = applyFiltersAndSorting(state);
    },

    resetFilters: (state) => {
      state.filters = {};
      state.filteredItems = state.allItems;
      state.filteredOptions = JSON.parse(
        JSON.stringify(state.initialFiltersState)
      );
      state.firstSelectedFilter = null;
      state.sortOrder = { by: "price", order: "default", value: "default" };
      state.priceRange = {
        min: state.initialFiltersState.price.range.min,
        max: state.initialFiltersState.price.range.max,
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
