import { Input, Button } from "antd";
import { memo } from "react";

const PriceFilter = memo(
  ({
    minPrice,
    maxPrice,
    tempMinValue,
    tempMaxValue,
    setTempMinValue,
    setTempMaxValue,
    handlePriceApply,
    handlePriceReset,
  }) => {
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
  }
);

export default PriceFilter;
