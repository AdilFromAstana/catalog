import { useCallback, useState, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/filterSlice";
import OptionsDrawer from "./OptionsDrawer";
import FilterButton from "./FilterButton";
import PriceDrawer from "./PriceDrawer";

const InlineFilters = memo(() => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters.filters);
  const filteredOptions = useSelector((state) => state.filters.filteredOptions);
  const priceRange = useSelector(
    (state) =>
      state.filters.filteredOptions?.price?.range || { min: 0, max: 0 },
  );

  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const [priceVisible, setPriceVisible] = useState(false);
  const [tempPrice, setTempPrice] = useState([priceRange.min, priceRange.max]);

  const showDrawer = useCallback(
    (key) => {
      if (key === "price") {
        setTempPrice([
          filters.price?.[0] ?? priceRange.min,
          filters.price?.[1] ?? priceRange.max,
        ]);
        setPriceVisible(true);
      } else {
        setActiveFilter(key);
        setTempFilters((prev) => ({
          ...prev,
          [key]: filters[key] || [],
        }));
        setVisible(true);
      }
      document.body.style.overflow = "hidden";
    },
    [filters, priceRange],
  );

  const closeDrawer = useCallback(() => {
    setVisible(false);
    setActiveFilter(null);
    document.body.style.overflow = "auto";
  }, []);

  const closePriceDrawer = useCallback(() => {
    document.body.style.overflow = "auto";
    setPriceVisible(false);
  }, []);

  const onSelectItem = useCallback((paramKey, optionValue) => {
    setTempFilters((prev) => ({
      ...prev,
      [paramKey]: prev[paramKey]?.includes(optionValue)
        ? prev[paramKey].filter((item) => item !== optionValue)
        : [...(prev[paramKey] || []), optionValue],
    }));
  }, []);

  const applyFilterChanges = useCallback(() => {
    if (activeFilter) {
      dispatch(
        updateFilter({
          param: activeFilter,
          values: tempFilters[activeFilter] || [],
        }),
      );
    }
    closeDrawer();
  }, [activeFilter, dispatch, tempFilters, closeDrawer]);

  const resetFilterForActiveCategory = useCallback(() => {
    if (!activeFilter) return;
    dispatch(updateFilter({ param: activeFilter, values: [] }));
    setTempFilters((prev) => ({
      ...prev,
      [activeFilter]: [],
    }));
  }, [activeFilter, dispatch]);

  const resetPriceFilter = useCallback(
    () => setTempPrice([priceRange.min, priceRange.max]),
    [priceRange],
  );

  const applyPriceFilter = useCallback(() => {
    dispatch(updateFilter({ param: "price", values: tempPrice }));
    closePriceDrawer();
  }, [dispatch, tempPrice, closePriceDrawer]);

  const sortedFilters = useMemo(() => {
    if (!filteredOptions) return [];

    return Object.entries(filteredOptions).sort(([keyA], [keyB]) => {
      const hasValueA =
        keyA === "price"
          ? filters.price?.[0] !== priceRange.min ||
            filters.price?.[1] !== priceRange.max
          : (filters[keyA] || []).length > 0;
      const hasValueB =
        keyB === "price"
          ? filters.price?.[0] !== priceRange.min ||
            filters.price?.[1] !== priceRange.max
          : (filters[keyB] || []).length > 0;
      return hasValueB - hasValueA;
    });
  }, [filteredOptions, filters, priceRange]);

  return (
    <>
      <div className="scrollable-row">
        {sortedFilters.map(([key, param]) => (
          <FilterButton
            key={key}
            keyName={key}
            param={param}
            filters={filters}
            priceRange={priceRange}
            onClick={showDrawer}
          />
        ))}
      </div>

      <OptionsDrawer
        visible={visible}
        onClose={closeDrawer}
        activeFilter={activeFilter}
        filteredOptions={filteredOptions}
        tempFilters={tempFilters}
        onSelectItem={onSelectItem}
        onReset={resetFilterForActiveCategory}
        onApply={applyFilterChanges}
        title={filteredOptions?.[activeFilter]?.name || "Фильтр"}
      />

      <PriceDrawer
        visible={priceVisible}
        onClose={closePriceDrawer}
        priceRange={priceRange}
        tempPrice={tempPrice}
        setTempPrice={setTempPrice}
        onReset={resetPriceFilter}
        onApply={applyPriceFilter}
      />
    </>
  );
});

export default InlineFilters;
