import React, { memo, useRef, useState } from "react";
import { Button, Checkbox, Drawer, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, resetFilters } from "../redux/filterSlice";

const InlineFilters = memo(() => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const filteredOptions = useSelector((state) => state.filters.filteredOptions);
  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const listRef = useRef(null);

  const showDrawer = (key) => {
    setActiveFilter(key);
    setVisible(true);
    setTempFilters(filters);
  };

  const closeDrawer = () => {
    setVisible(false);
    setActiveFilter(null);
  };

  const onSelectItem = (paramKey, optionValue) => {
    const currentValues = tempFilters[paramKey] || [];
    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter((item) => item !== optionValue)
      : [...currentValues, optionValue];

    setTempFilters((prev) => ({
      ...prev,
      [paramKey]: newValues,
    }));
  };

  const resetFilterForActiveCategory = () => {
    if (!activeFilter) return;

    // Сбрасываем фильтр только для текущей категории
    dispatch(updateFilter({ param: activeFilter, values: [] }));

    // Обновляем временные фильтры, убирая выбранные значения для активного фильтра
    setTempFilters((prev) => ({
      ...prev,
      [activeFilter]: [],
    }));
  };

  const applyFilterChanges = () => {
    dispatch(updateFilter({ param: activeFilter, values: tempFilters[activeFilter] || [] }));
    closeDrawer();
  };

  // Сброс только активного фильтра
  const resetCurrentFilter = () => {
    dispatch(updateFilter({ param: activeFilter, values: [] }));
    closeDrawer();
  };

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
            const selectedValues = filters[key] || [];
            const selectedLabels = param.options
              ?.filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => opt.name);

            let buttonText = param.name;
            if (selectedLabels.length === 1) {
              buttonText = selectedLabels[0];
            } else if (selectedLabels.length > 1) {
              buttonText = `${selectedLabels[0]}, +${selectedLabels.length - 1}`;
            }

            return (
              <Button
                key={key}
                onClick={() => showDrawer(key)}
                style={{
                  borderRadius: "20px",
                  backgroundColor: selectedValues.length ? "#091235" : "#FEFBEA",
                  color: selectedValues.length ? "#FEFBEA" : "#091235",
                  borderColor: selectedValues.length ? "#FEFBEA" : "#091235",
                }}
              >
                {buttonText}
              </Button>
            );
          })}
      </div>
      <Drawer
        title={filteredOptions[activeFilter]?.name}
        placement="bottom"
        onClose={closeDrawer}
        open={visible}
        height="90svh"
        styles={{
          header: { backgroundColor: "#091235", color: "#FEFBEA", fontSize: "24px" },
          body: { backgroundColor: "#091235", display: "flex", flexDirection: "column", height: "100%", paddingTop: 12 },
        }}
        rootClassName="inline-filters-header"
      >
        {activeFilter && (
          <div ref={listRef} style={{ flex: 1, overflowY: "auto", marginTop: 10 }}>
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
    </div>
  );
});

export default InlineFilters;
