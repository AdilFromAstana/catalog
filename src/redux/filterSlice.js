import { createSlice } from "@reduxjs/toolkit";
import { initialFlowers, initialFilters } from "../common/initialData";

const allPrices = initialFlowers.flatMap((flower) => [
  flower.price,
  flower.originalPrice,
]);
const minPrice = Math.min(...allPrices);
const maxPrice = Math.max(...allPrices);

const initialState = {
  filters: {}, // Активные фильтры
  filteredFlowers: initialFlowers, // Отфильтрованные товары
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

      let filtered = initialFlowers.filter((flower) =>
        Object.entries(state.filters).every(([param, values]) =>
          values.length
            ? values.some((v) =>
                Array.isArray(flower[param])
                  ? flower[param].includes(v)
                  : flower[param] === v,
              )
            : true,
        ),
      );

      if (state.filters.price) {
        const [min, max] = state.filters.price;
        filtered = filtered.filter(
          (flower) => flower.price >= min && flower.price <= max,
        );
      }

      // Применяем сортировку
      if (state.order === "asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (state.order === "desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredFlowers = filtered;

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
              count: state.filteredFlowers.filter((p) =>
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

    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      state.filters.price = [min, max];
      state.filteredFlowers = initialFlowers.filter(
        (flower) => flower.price >= min && flower.price <= max,
      );

      // Применяем текущую сортировку
      if (state.order === "asc") {
        state.filteredFlowers = state.filteredFlowers.sort(
          (a, b) => a.price - b.price,
        );
      } else if (state.order === "desc") {
        state.filteredFlowers = state.filteredFlowers.sort(
          (a, b) => b.price - a.price,
        );
      }
    },

    // Устанавливаем порядок сортировки
    setSortOrder: (state, action) => {
      state.order = action.payload;
      if (state.order.order === "asc") {
        state.filteredFlowers = [...state.filteredFlowers].sort(
          (a, b) => a.price - b.price,
        );
      } else if (state.order.order === "desc") {
        state.filteredFlowers = [...state.filteredFlowers].sort(
          (a, b) => b.price - a.price,
        );
      }
    },

    resetFilters: (state) => {
      state.filters = {};
      state.filteredFlowers = initialFlowers;
      state.filteredOptions = initialFilters;
      state.firstSelectedFilter = null;
      state.initialFiltersState = initialFilters;
      state.order = "default"; // Сбрасываем сортировку
      state.priceRange = { min: minPrice, max: maxPrice }; // Возвращаем стандартные границы
    },
  },
});

export const { updateFilter, resetFilters, setSortOrder, setPriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
