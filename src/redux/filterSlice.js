import { createSlice } from "@reduxjs/toolkit";
import { initialFlowers, initialFilters } from "../common/initialData";

const initialState = {
    filters: {}, // Активные фильтры
    filteredFlowers: initialFlowers, // Отфильтрованные товары
    filteredOptions: initialFilters, // Доступные параметры
    initialFiltersState: initialFilters, // Запоминаем первый выбранный фильтр
    firstSelectedFilter: null, // Первый выбранный фильтр
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const { param, values } = action.payload;

            // Если это первый выбранный фильтр, сохраняем его начальные значения
            if (!state.firstSelectedFilter) {
                state.firstSelectedFilter = param;
                state.initialFiltersState = { ...state.filteredOptions };
            }

            // Обновляем активные фильтры
            state.filters[param] = values.length ? values : [];

            // Фильтруем товары по всем активным фильтрам
            state.filteredFlowers = initialFlowers.filter((flower) =>
                Object.entries(state.filters).every(([param, values]) =>
                    values.length
                        ? values.some((v) =>
                            Array.isArray(flower[param])
                                ? flower[param].includes(v)
                                : flower[param] === v
                        )
                        : true
                )
            );

            // Обновляем фильтры, но НЕ трогаем первый выбранный фильтр
            state.filteredOptions = Object.keys(initialFilters).reduce((acc, key) => {
                acc[key] = {
                    ...initialFilters[key],
                    options: initialFilters[key].options.map((option) => ({
                        ...option,
                        count: state.filteredFlowers.filter((p) =>
                            Array.isArray(p[key])
                                ? p[key].includes(option.value)
                                : p[key] === option.value
                        ).length,
                    })).filter((option) => option.count > 0), // Исключаем нулевые
                };
                return acc;
            }, {});

            // Восстанавливаем первый выбранный фильтр
            if (state.firstSelectedFilter) {
                state.filteredOptions[state.firstSelectedFilter] = state.initialFiltersState[state.firstSelectedFilter];
            }
        },
        resetFilters: (state) => {
            state.filters = {};
            state.filteredFlowers = initialFlowers;
            state.filteredOptions = initialFilters;
            state.firstSelectedFilter = null;
            state.initialFiltersState = initialFilters;
        },
    },
});

export const { updateFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
