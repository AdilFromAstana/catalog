import { createSlice } from "@reduxjs/toolkit";
import { initialFlowers, initialFilters } from "../common/initialData";

const initialProducts = initialFlowers;

const allPrices = initialProducts.flatMap((product) => [
  product.price,
  product.originalPrice,
]);
const minPrice = Math.min(...allPrices);
const maxPrice = Math.max(...allPrices);

const initialState = {
  filters: {}, // Активные фильтры
  filteredProducts: initialProducts, // Отфильтрованные товары
  filteredOptions: initialFilters, // Доступные параметры
  initialFiltersState: initialFilters, // Запоминаем первый выбранный фильтр
  firstSelectedFilter: null, // Первый выбранный фильтр
  sortOrder: "default", // "asc" - по возрастанию, "desc" - по убыванию, "default" - без сортировки
  priceRange: { min: minPrice, max: maxPrice }, // Всегда хранит самый большой и маленький цены
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { param, values } = action.payload;

      if (!state.firstSelectedFilter) {
        state.firstSelectedFilter = param;
        state.initialFiltersState = { ...state.filteredOptions };
      }

      state.filters[param] = values.length ? values : [];

      let filtered = initialProducts.filter((product) =>
        Object.entries(state.filters).every(([param, values]) =>
          values.length
            ? values.some((v) =>
                Array.isArray(product[param])
                  ? product[param].includes(v)
                  : product[param] === v,
              )
            : true,
        ),
      );

      // Фильтрация по цене "от" и "до", если переданы параметры
      if (state.filters.price) {
        const [min, max] = state.filters.price;
        filtered = filtered.filter(
          (product) => product.price >= min && product.price <= max,
        );
      }

      // Применяем сортировку
      if (state.sortOrder === "asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortOrder === "desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = filtered;

      // Обновляем фильтры, но НЕ трогаем первый выбранный фильтр
      state.filteredOptions = Object.keys(initialFilters).reduce((acc, key) => {
        const filterConfig = initialFilters[key];

        acc[key] = {
          ...filterConfig,
        };

        // Если это `options`, обновляем количество доступных элементов
        if (filterConfig.options) {
          acc[key].options = filterConfig.options
            .map((option) => ({
              ...option,
              count: state.filteredProducts.filter((p) =>
                Array.isArray(p[key])
                  ? p[key].includes(option.value)
                  : p[key] === option.value,
              ).length,
            }))
            .filter((option) => option.count > 0); // Исключаем нулевые
        }

        return acc;
      }, {});

      if (state.firstSelectedFilter) {
        state.filteredOptions[state.firstSelectedFilter] =
          state.initialFiltersState[state.firstSelectedFilter];
      }
    },

    // Устанавливаем диапазон цены (фильтр по "от" и "до")
    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.filters.price = [min, max];

      state.filteredProducts = initialProducts.filter(
        (product) => product.price >= min && product.price <= max,
      );

      // Применяем текущую сортировку
      if (state.sortOrder === "asc") {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => a.price - b.price,
        );
      } else if (state.sortOrder === "desc") {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.price - a.price,
        );
      }
    },

    // Устанавливаем порядок сортировки
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;

      if (state.sortOrder === "asc") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => a.price - b.price,
        );
      } else if (state.sortOrder === "desc") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => b.price - a.price,
        );
      }
    },

    resetFilters: (state) => {
      state.filters = {};
      state.filteredProducts = initialProducts;
      state.filteredOptions = initialFilters;
      state.firstSelectedFilter = null;
      state.initialFiltersState = initialFilters;
      state.sortOrder = "default"; // Сбрасываем сортировку
      state.priceRange = { min: minPrice, max: maxPrice }; // Возвращаем стандартные границы
    },
  },
});

export const { updateFilter, resetFilters, setSortOrder, setPriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
