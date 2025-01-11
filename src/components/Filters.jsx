import { Button, Checkbox, Input, List, Slider } from "antd";
import { useEffect, useState } from "react";
import { DownCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

function findCategoryByKey(categories, key) {
  for (const category of categories) {
    if (category.key === key) return category;
    if (category.children) {
      const found = findCategoryByKey(category.children, key);
      if (found) return found;
    }
  }
  return null;
}

function getNestedItems(categories, keys) {
  let currentLevel = categories;
  for (const key of keys) {
    const found = currentLevel.find((item) => item.key === key);
    if (found && found.children) {
      currentLevel = found.children;
    } else {
      currentLevel = [];
    }
  }
  return currentLevel;
}

const Filters = ({
  minPrice,
  maxPrice,
  colorsWithCounts,
  selectedColors,
  setTempMinValue,
  setTempMaxValue,
  handleColorChange,
  allCategories,
  setSelectedKeys,
  selectedKeys,
  selectedPath,
  productsTotalSize,
}) => {
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [minMaxObject, setMinMaxObject] = useState({});

  const currentItems = selectedKeys.length
    ? getNestedItems(allCategories, selectedKeys)
    : allCategories;

  const getCurrentCategoryTitle = () => {
    if (selectedPath.length > 0) {
      return selectedPath[selectedPath.length - 1]?.title;
    } else {
      return "Все категории";
    }
  };

  const handleClick = (key) => {
    setSelectedKeys((prevKeys) => [...prevKeys, key]);
  };

  const handleBackToLevel = (index) => {
    setSelectedKeys((prevKeys) => prevKeys.slice(0, index + 1));
  };

  const setMinPriceToInput = () => {
    if (localMinPrice < minPrice) {
      setLocalMinPrice(minPrice);
    } else if (localMaxPrice < localMinPrice) {
      setLocalMinPrice(localMaxPrice);
    }
  };

  const setMaxPriceToInput = () => {
    if (localMaxPrice > maxPrice) {
      setLocalMaxPrice(maxPrice);
    } else if (localMinPrice > localMaxPrice) {
      setLocalMaxPrice(localMinPrice);
    }
  };

  const handleSliderChange = ([newMinPrice, newMaxPrice]) => {
    setLocalMinPrice(newMinPrice);
    setLocalMaxPrice(newMaxPrice);
  };

  const submitPrices = () => {
    setTempMinValue(localMinPrice);
    setTempMaxValue(localMaxPrice);
  };

  const resetPrices = () => {
    setTempMinValue(null);
    setTempMaxValue(null);
    setLocalMinPrice(minPrice);
    setLocalMaxPrice(maxPrice);
  };

  useEffect(() => {
    setLocalMinPrice(Number(minPrice));
    setLocalMaxPrice(Number(maxPrice));

    const keys = [minPrice, maxPrice];
    const newObject = {};
    keys.forEach((key) => {
      newObject[key] = key;
    });
    setMinMaxObject(newObject);
  }, [minPrice, maxPrice]);

  return (
    <div style={{ margin: "0 20px" }} className="filter-component">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            margin: "20px 0px",
          }}
        >
          <h3 style={{ margin: 0 }}>{getCurrentCategoryTitle()}</h3>
          <span>{productsTotalSize} товар</span>
        </div>
        <List
          bordered
          dataSource={[...selectedPath, ...currentItems]}
          className="category-list"
          renderItem={(item, index) => {
            const isSelected = index < selectedPath.length;
            const isThislastItem =
              currentItems.length === 0 && selectedPath.length - 1 === index;
            return (
              <List.Item
                onClick={() => {
                  if (isSelected) {
                    handleBackToLevel(index);
                  } else {
                    handleClick(item.key);
                  }
                }}
                className={`category-list-item ${
                  isSelected ? "selected" : ""
                } ${isThislastItem ? "last-item" : ""}`}
              >
                {item.title}
              </List.Item>
            );
          }}
        />
      </div>
      <div>
        <h3>Цена</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Slider
            range
            onChange={handleSliderChange}
            value={[localMinPrice, localMaxPrice]}
            max={maxPrice}
            min={minPrice}
            marks={minMaxObject}
          />
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Input
              size="large"
              value={localMinPrice}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setLocalMinPrice(Number(value));
                }
              }}
              onBlur={setMinPriceToInput}
              min={0}
              type="tel"
              prefix="от"
            />
            <Input
              size="large"
              value={localMaxPrice}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setLocalMaxPrice(Number(value));
                }
              }}
              onBlur={setMaxPriceToInput}
              min={minPrice}
              max={maxPrice}
              type="tel"
              prefix="до"
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="large"
              style={{ width: "100%" }}
              disabled={
                maxPrice === localMaxPrice && minPrice === localMinPrice
              }
              onClick={resetPrices}
            >
              Сбросить
            </Button>
            <Button
              size="large"
              type="primary"
              style={{ width: "100%" }}
              onClick={submitPrices}
            >
              Применить
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h3>Цвет</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {colorsWithCounts.map(({ color, count }) => (
            <Checkbox
              key={color}
              onChange={() => handleColorChange(color)}
              checked={selectedColors.includes(color)}
            >
              {color} ({count})
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
