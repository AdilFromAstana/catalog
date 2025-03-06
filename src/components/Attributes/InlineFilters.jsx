import React, { memo, useCallback, useEffect, useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import FiltersDrawer from "./FiltersDrawer";
import PriceFilterDrawer from "./PriceFilterDrawer";
import { useFilterItems } from "../../firestoreService";
import { setItems, setFilter, resetFilter } from "../../redux/itemsSlice";

const InlineFilters = memo(() => {
  const { attributes } = useSelector((state) => state.attributes);
  const { selectedCategory } = useSelector((state) => state.categories);
  const { tempFilters } = useSelector((state) => state.items); // 👈 Берем фильтры из Redux
  const dispatch = useDispatch();

  console.log("tempFilters: ", tempFilters);

  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);

  const showDrawer = useCallback((key) => {
    if (key === "price") {
      setPriceVisible(true);
      return;
    }
    setActiveFilter(key);
    setVisible(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setVisible(false);
    setActiveFilter(null);
  }, []);

  const closePriceDrawer = useCallback(() => {
    setPriceVisible(false);
  }, []);

  const onSelectItem = useCallback(
    (paramKey, optionValue) => {
      dispatch(setFilter({ key: paramKey, value: optionValue }));
    },
    [dispatch],
  );

  const resetFilterForActiveCategory = useCallback(() => {
    if (!activeFilter) return;
    dispatch(resetFilter({ key: activeFilter }));
  }, [activeFilter, dispatch]);

  const {
    data: filteredItems,
    isLoading,
    error,
  } = useFilterItems({
    businessId: 1,
    categoryId: selectedCategory?.id,
    filters: tempFilters,
    categoryHasChild: selectedCategory?.hasChild,
  });

  console.log("filteredItems: ", filteredItems);

  useEffect(() => {
    if (!filteredItems) {
      console.error("❌ filteredItems не получены, не отправляем в Redux.");
      return;
    }
    
    dispatch(setItems(filteredItems));
  }, [filteredItems, dispatch]);

  return (
    <div>
      <div className="scrollable-row">
        <Button
          onClick={() => showDrawer("price")}
          style={{ borderRadius: "20px" }}
        >
          Цена: 0₸ - 100000₸
        </Button>
        {attributes?.map((attribute) => (
          <FilterButton
            key={attribute.code}
            attribute={attribute}
            selectedValues={tempFilters[attribute.code] || []}
            showDrawer={showDrawer}
          />
        ))}
      </div>

      <FiltersDrawer
        attributes={attributes}
        activeFilter={activeFilter}
        visible={visible}
        tempFilters={tempFilters}
        onClose={closeDrawer}
        onSelectItem={onSelectItem}
        resetFilter={resetFilterForActiveCategory}
        applyFilter={closeDrawer}
      />

      <PriceFilterDrawer
        open={priceVisible}
        onClose={closePriceDrawer}
        applyFilter={closePriceDrawer}
      />
    </div>
  );
});

export default InlineFilters;
