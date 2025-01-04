import { Slider, Input, Button } from "antd";

const PriceFilter = ({
  minPrice,
  maxPrice,
  tempMinValue,
  tempMaxValue,
  setTempMinValue,
  setTempMaxValue,
  handlePriceApply,
  handlePriceReset,
}) => {
  const handleSliderChange = ([min, max]) => {
    setTempMinValue(min);
    setTempMaxValue(max);
  };

  return (
    <div>
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
          onChange={(e) => setTempMinValue(Number(e.target.value))}
          min={minPrice}
          max={maxPrice}
          type="tel"
          prefix="от"
        />
        <Input
          size="large"
          value={tempMaxValue}
          onChange={(e) => setTempMaxValue(Number(e.target.value))}
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
    </div>
  );
};

export default PriceFilter;
