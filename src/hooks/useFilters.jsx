import { useState, useMemo } from "react";
import { initialFlowers } from "../common/initialData"; // Товары
import { initialFilters } from "../common/initialData"; // Фильтры

const useFilters = () => {
  const [filters, setFilters] = useState({});
  const [filteredFlowers, setFilteredFlowers] = useState(initialFlowers);

  // Обновляем список доступных фильтров в зависимости от текущего выбора
  const filteredOptions = useMemo(() => {
    // Отфильтрованные товары
    let filteredProducts = initialFlowers.filter((flower) =>
      Object.entries(filters).every(([param, values]) =>
        values.length ? values.includes(flower[param]) : true
      )
    );

    // Генерация актуальных параметров после фильтрации
    const updatedFilterData = Object.keys(initialFilters).reduce((acc, key) => {
      const options = initialFilters[key].options.map((option) => ({
        ...option,
        count: filteredProducts.filter((p) =>
          Array.isArray(p[key])
            ? p[key].includes(option.value)
            : p[key] === option.value
        ).length,
      }));
      acc[key] = { ...initialFilters[key], options };
      return acc;
    }, {});

    setFilteredFlowers(filteredProducts); // Обновляем отфильтрованные товары
    return updatedFilterData;
  }, [filters]);

  // Функция для обновления фильтров
  const updateFilter = (param, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters, // ✅ Сохраняем предыдущие параметры
      [param]: values.length ? values : prevFilters[param] || [], // ✅ Если пусто, оставляем предыдущее значение
    }));
  };

  // Функция для сброса фильтров
  const resetFilters = () => {
    setFilters({});
    setFilteredFlowers(initialFlowers);
  };

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredFlowers,
    filteredOptions, // Обновленные варианты для фильтров
  };
};

export default useFilters;
