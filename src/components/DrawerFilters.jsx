import { Button, Drawer, Input, Radio, Slider } from "antd";

const DrawerFilters = ({
  isSortDrawerVisible,
  isPriceDrawerVisible,
  toggleSortDrawer,
  togglePriceDrawer,
  tempMinValue,
  tempMaxValue,
  minPrice,
  maxPrice,
  handleTempMinChange,
  handleTempMaxChange,
  handleSliderChange,
  handlePriceReset,
  handlePriceApply,
  handleSortChange,
}) => {
  return (
    <>
      <Drawer
        title="Сортировка"
        placement="bottom"
        onClose={() => toggleSortDrawer(false)}
        open={isSortDrawerVisible}
      >
        <Radio.Group
          onChange={(e) => handleSortChange(e.target.value)}
          defaultValue="asc"
          className="radio-group"
        >
          {[
            { value: "asc", label: "Сначала дешевые" },
            { value: "desc", label: "Сначала дорогие" },
          ].map((option) => (
            <Radio
              key={option.value}
              className="radio-option"
              value={option.value}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Drawer>
      <Drawer
        title="Цена"
        placement="bottom"
        onClose={() => togglePriceDrawer(false)}
        open={isPriceDrawerVisible}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Input
            size="large"
            value={tempMinValue}
            onChange={(e) => handleTempMinChange(e.target.value)}
            min={minPrice}
            max={maxPrice}
            type="tel"
            prefix="от"
          />
          <Input
            size="large"
            value={tempMaxValue}
            onChange={(e) => handleTempMaxChange(e.target.value)}
            min={minPrice}
            max={maxPrice}
            type="tel"
            prefix="до"
          />
        </div>
        <Slider
          range
          value={[tempMinValue, tempMaxValue]}
          min={minPrice}
          max={maxPrice}
          onChange={handleSliderChange}
        />
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
      </Drawer>
    </>
  );
};

export default DrawerFilters;
