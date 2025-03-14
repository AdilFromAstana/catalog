import React, { memo, useRef, useState, useCallback } from "react";
import { Button, Checkbox, Drawer, List, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, setPriceRange } from "../redux/filterSlice";

const InlineFilters = memo(() => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const filteredOptions = useSelector((state) => state.filters.filteredOptions);
  const priceRange = filteredOptions.price?.range || { min: 0, max: 0 };

  console.log("filters: ", filters);

  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const [priceVisible, setPriceVisible] = useState(false);
  const [tempPrice, setTempPrice] = useState([
    filters.price?.[0] || priceRange.min,
    filters.price?.[1] || priceRange.max,
  ]);

  const listRef = useRef(null);

  const showDrawer = useCallback(
    (key) => {
      if (key === "price") {
        setPriceVisible(true);
      } else {
        setActiveFilter(key);
        setVisible(true);
        setTempFilters(filters);
      }
    },
    [filters],
  );

  const closeDrawer = useCallback(() => {
    setVisible(false);
    setActiveFilter(null);
  }, []);

  const closePriceDrawer = useCallback(() => {
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

  const resetFilterForActiveCategory = useCallback(() => {
    if (!activeFilter) return;

    dispatch(updateFilter({ param: activeFilter, values: [] }));

    setTempFilters((prev) => ({
      ...prev,
      [activeFilter]: [],
    }));
  }, [dispatch, activeFilter]);

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
  }, [dispatch, activeFilter, tempFilters, closeDrawer]);

  const resetPriceFilter = useCallback(() => {
    setTempPrice([priceRange.min, priceRange.max]);
  }, [dispatch, tempPrice, closePriceDrawer]);

  const applyPriceFilter = useCallback(() => {
    dispatch(setPriceRange({ min: tempPrice[0], max: tempPrice[1] }));
    closePriceDrawer();
  }, [dispatch, tempPrice, closePriceDrawer]);

  const isMinMaxPriceChanged = filters?.price
    ? filters?.price?.[0] !== priceRange?.min ||
      filters?.price?.[1] !== priceRange?.max
    : false;

  return (
    <div>
      <div className="scrollable-row">
        {Object.entries(filteredOptions)
          .sort(([keyA], [keyB]) => {
            const hasValueA = (filters[keyA] || []).length > 0;
            const hasValueB = (filters[keyB] || []).length > 0;
            return hasValueB - hasValueA;
          })
          .map(([key, param]) => {
            if (key === "price") return null; // Пропускаем price

            const selectedValues = filters[key] || [];
            const selectedLabels = param?.options
              ?.filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => opt.name);

            let buttonText = param.name;
            if (selectedLabels?.length === 1) {
              buttonText = selectedLabels[0];
            } else if (selectedLabels?.length > 1) {
              buttonText = `${selectedLabels[0]}, +${selectedLabels.length - 1}`;
            }

            return (
              <Button
                key={key}
                onClick={() => showDrawer(key)}
                style={{
                  borderRadius: "20px",
                  backgroundColor: selectedValues.length
                    ? "#091235"
                    : "#FEFBEA",
                  color: selectedValues.length ? "#FEFBEA" : "#091235",
                  borderColor: selectedValues.length ? "#FEFBEA" : "#091235",
                }}
              >
                {buttonText}
              </Button>
            );
          })}

        {/* Отдельная кнопка для цены, показывающая выбранный диапазон */}
        <Button
          onClick={() => showDrawer("price")}
          style={{
            borderRadius: "20px",
            backgroundColor: isMinMaxPriceChanged ? "#091235" : "#FEFBEA",
            color: isMinMaxPriceChanged ? "#FEFBEA" : "#091235",
            borderColor: isMinMaxPriceChanged ? "#FEFBEA" : "#091235",
          }}
        >
          {isMinMaxPriceChanged
            ? `Цена: ${filters.price?.[0]}₸ - ${filters.price?.[1]}₸`
            : "Цена"}
        </Button>
      </div>

      {/* Drawer для обычных фильтров */}
      <Drawer
        title={filteredOptions[activeFilter]?.name}
        placement="bottom"
        onClose={closeDrawer}
        open={visible}
        height="90svh"
        styles={{
          header: {
            backgroundColor: "#091235",
            color: "#FEFBEA",
            fontSize: "24px",
          },
          body: {
            backgroundColor: "#091235",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: 12,
          },
        }}
        rootClassName="inline-filters-header"
      >
        {activeFilter && (
          <div
            ref={listRef}
            style={{ flex: 1, overflowY: "auto", marginTop: 10 }}
          >
            <List
              dataSource={filteredOptions[activeFilter]?.options || []}
              renderItem={(option) => (
                <List.Item>
                  <Checkbox
                    style={{ width: "100%", color: "#FEFBEA", fontSize: 20 }}
                    checked={tempFilters[activeFilter]?.includes(option.value)}
                    onChange={() => onSelectItem(activeFilter, option.value)}
                  >
                    {option.name} ({option.count})
                  </Checkbox>
                </List.Item>
              )}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            paddingTop: "20px",
            borderTop: "2px solid black",
          }}
        >
          <Button
            size="large"
            onClick={resetFilterForActiveCategory}
            type="default"
            style={{ width: "100%" }}
          >
            Сбросить
          </Button>
          <Button
            size="large"
            onClick={applyFilterChanges}
            type="primary"
            style={{ width: "100%" }}
          >
            Применить
          </Button>
        </div>
      </Drawer>

      {/* Drawer для фильтрации по цене */}
      <Drawer
        title="Цена"
        placement="bottom"
        onClose={closePriceDrawer}
        open={priceVisible}
        height="40svh"
        styles={{
          header: {
            backgroundColor: "#091235",
            color: "#FEFBEA",
            fontSize: "24px",
          },
          body: {
            backgroundColor: "#091235",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: 12,
          },
        }}
      >
        <div style={{ flex: 1, marginTop: 10 }}>
          <Slider
            range
            min={priceRange.min}
            max={priceRange.max}
            value={tempPrice}
            onChange={(values) => setTempPrice(values)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#FEFBEA",
            }}
          >
            <span>{tempPrice[0]}₸</span>
            <span>{tempPrice[1]}₸</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            paddingTop: "20px",
            borderTop: "2px solid black",
          }}
        >
          <Button
            size="large"
            onClick={resetPriceFilter}
            type="default"
            style={{ width: "100%" }}
          >
            Сбросить
          </Button>
          <Button
            size="large"
            onClick={applyPriceFilter}
            type="primary"
            style={{ width: "100%" }}
          >
            Применить
          </Button>
        </div>
      </Drawer>
    </div>
  );
});

export default InlineFilters;
