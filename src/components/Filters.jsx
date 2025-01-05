import { Button, Checkbox, Input, Tree } from "antd";

const Filters = ({
  minPrice,
  maxPrice,
  tempMinValue,
  tempMaxValue,
  colorsWithCounts,
  selectedColors,
  handleTempMinChange,
  handleTempMaxChange,
  handleColorChange,
  handlePriceReset,
  handlePriceApply,
  currentHierarchy,
  handleCategoryClick,
}) => {
  return (
    <div style={{ margin: "0 20px" }} className="filter-component">
      <div>
        <h3>Категории</h3>
        <Tree
          treeData={currentHierarchy}
          showLine
          onSelect={(selectedKeys) => {
            handleCategoryClick(selectedKeys[0]);
          }}
        />
      </div>
      <div>
        <h3>Цена</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Input
            size="large"
            value={tempMinValue}
            onChange={(e) => handleTempMinChange(e.target.value)}
            min={0}
            max={maxPrice}
            type="tel"
            prefix="от"
          />
          <Input
            size="large"
            value={tempMaxValue}
            onChange={(e) => handleTempMaxChange(e.target.value)}
            min={0}
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
            onClick={handlePriceReset}
          >
            Сбросить
          </Button>
          <Button
            size="large"
            type="primary"
            style={{ width: "100%" }}
            onClick={handlePriceApply}
          >
            Применить
          </Button>
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
