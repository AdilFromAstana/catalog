import React, { memo, useRef, useState } from "react";
import { Button, Checkbox, Drawer, Input, List, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useFilters from "../hooks/useFilters";
import PriceFilter from "./PriceFilter";

const InlineFilters = memo(({ applyFilters }) => {
  const { filters, updateFilter, filteredOptions } = useFilters();
  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempFilters, setTempFilters] = useState({});
  const [confirmedFilters, setConfirmedFilters] = useState({});
  const listRef = useRef(null);

  const showDrawer = (key) => {
    setActiveFilter(key);
    setVisible(true);
    setSearchTerm("");
    setTempFilters(filters);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = 0;
      }
    }, 0);
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

  const applyFilterChanges = () => {
    setConfirmedFilters(tempFilters);
    applyFilters(tempFilters);
    closeDrawer();
  };

  return (
    <div>
      <div className="scrollable-row">
        {Object.entries(filteredOptions)
          .sort(([keyA], [keyB]) => {
            const hasValueA = (confirmedFilters[keyA] || []).length > 0;
            const hasValueB = (confirmedFilters[keyB] || []).length > 0;
            return hasValueB - hasValueA;
          })
          .map(([key, param]) => {
            const selectedValues = confirmedFilters[key] || [];
            const selectedLabels = param.options
              ?.filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => opt.name);

            let buttonText = param.name;
            if (selectedLabels.length === 1) {
              buttonText = selectedLabels[0];
            } else if (selectedLabels.length > 1) {
              buttonText = `${selectedLabels[0]}, +${
                selectedLabels.length - 1
              }`;
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
      </div>
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
        {activeFilter === "price" ? (
          <PriceFilter
            minPrice={filteredOptions.price.min}
            maxPrice={filteredOptions.price.max}
            applyFilters={applyFilters}
          />
        ) : (
          <div
            ref={listRef}
            style={{ flex: 1, overflowY: "auto", marginTop: 10 }}
          >
            <List
              dataSource={(() => {
                const selectedOptions =
                  filteredOptions[activeFilter]?.options?.filter((opt) =>
                    tempFilters[activeFilter]?.includes(opt.value)
                  ) || [];
                const unselectedOptions =
                  filteredOptions[activeFilter]?.options?.filter(
                    (opt) => !tempFilters[activeFilter]?.includes(opt.value)
                  ) || [];
                return [...selectedOptions, ...unselectedOptions];
              })()}
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
            onClick={closeDrawer}
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
