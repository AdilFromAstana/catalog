import React, { memo, useEffect, useState } from "react";
import { Collapse, Checkbox, Input, Button } from "antd";
import "./DesktopAttributes.css";
import { useSelector } from "react-redux";
import { setAttributes } from "../../redux/attributesSlice";
import { useGetAttributeCounts } from "../../firestoreService";
import { useDispatch } from "react-redux";

const { Panel } = Collapse;

// const attributes = [
//   { key: "brands", label: "Бренды", options: ["Nike", "Adidas", "Puma"] },
//   {
//     key: "category",
//     label: "Категория",
//     options: ["Одежда", "Обувь", "Аксессуары"],
//   },
//   {
//     key: "material",
//     label: "Материал",
//     options: ["Кожа", "Ткань", "Синтетика"],
//   },
//   { key: "color", label: "Цвет", options: ["Красный", "Синий", "Зеленый"] },
//   {
//     key: "discount",
//     label: "Скидка",
//     options: ["Без скидки", "До 30%", "От 30% до 50%", "Более 50%"],
//   },
//   { key: "price", label: "Цена", options: ["Дешевые", "Средние", "Дорогие"] },
// ];

const FilterCollapse = memo(() => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categories);
  const { data: attributes = [] } = useGetAttributeCounts({
    categoryId: selectedCategory?.id || null,
    businessId: 1,
    enabled: selectedCategory?.hasChild === false,
  });

  useEffect(() => {
    dispatch(setAttributes(attributes));
  }, [attributes]);

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: prev[key]?.includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...(prev[key] || []), value],
    }));
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <strong style={{ color: "#fefbea", fontSize: 16 }}>
          Выбранные фильтры
        </strong>
        <Button type="link" onClick={() => setSelectedFilters({})}>
          Сбросить
        </Button>
      </div>

      <Collapse bordered={false} defaultActiveKey={[]}>
        {attributes.map(({ key, label, options }) => (
          <Panel header={label} key={key}>
            {key === "discount" && (
              <>
                <Button
                  size="small"
                  style={{ marginBottom: 5 }}
                  onClick={() => handleFilterChange(key, "Без скидки")}
                >
                  Без скидки ✕
                </Button>
                <Input
                  placeholder="Поиск"
                  size="small"
                  style={{ marginBottom: 5 }}
                />
              </>
            )}
            {options.map((option) => (
              <div key={option} style={{ color: "#fefbea" }}>
                <Checkbox
                  checked={selectedFilters[key]?.includes(option)}
                  onChange={() => handleFilterChange(key, option)}
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>

      <div style={{ marginTop: 10 }}>
        <strong style={{ color: "#fefbea" }}>Выбранные:</strong>
        <div>
          {Object.entries(selectedFilters).map(([key, values]) =>
            values.map((value) => (
              <Button
                key={`${key}-${value}`}
                size="small"
                style={{ margin: 5 }}
                onClick={() => handleFilterChange(key, value)}
              >
                {value} ✕
              </Button>
            )),
          )}
        </div>
      </div>
    </div>
  );
});

export default FilterCollapse;
