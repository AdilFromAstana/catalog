import React, { memo, useRef, useState, useCallback } from "react";
import { Button, Checkbox, Drawer, List, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";

const InlineFilters = memo(() => {
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const [priceVisible, setPriceVisible] = useState(false);

  const listRef = useRef(null);

  const showDrawer = useCallback((key) => {
    if (key === "price") {
      setPriceVisible(true);
    } else {
      setActiveFilter(key);
      setVisible(true);
    }
  }, []);

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

    setTempFilters((prev) => ({
      ...prev,
      [activeFilter]: [],
    }));
  }, [dispatch, activeFilter]);

  const applyFilterChanges = useCallback(() => {
    if (activeFilter) {
    }
    closeDrawer();
  }, [dispatch, activeFilter, tempFilters, closeDrawer]);

  const applyPriceFilter = useCallback(() => {
    closePriceDrawer();
  }, [dispatch, , closePriceDrawer]);

  return (
    <div>
      <div className="scrollable-row">
        {/* Отдельная кнопка для цены, показывающая выбранный диапазон */}
        <Button
          onClick={() => showDrawer("price")}
          style={{
            borderRadius: "20px",
          }}
        >
          Цена: {[0]}₸ - {[1]}₸
        </Button>
      </div>

      {/* Drawer для обычных фильтров */}
      {/* <Drawer
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
      </Drawer> */}

      {/* Drawer для фильтрации по цене */}
      {/* <Drawer
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
            padding: "20px",
          },
        }}
      >
        <Slider
          range
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#FEFBEA",
          }}
        >
          <span>{[0]}₸</span>
          <span>{[1]}₸</span>
        </div>
        <Button
          size="large"
          onClick={applyPriceFilter}
          type="primary"
          style={{ width: "100%", marginTop: "20px" }}
        >
          Применить
        </Button>
      </Drawer> */}
    </div>
  );
});

export default InlineFilters;
