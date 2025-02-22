import { useState, useEffect, memo } from "react";
import { Input, Button, Slider } from "antd";
import useFilters from "../hooks/useFilters";

const PriceFilter = memo(({ minPrice, maxPrice, applyFilters }) => {
  const { filters, updateFilter } = useFilters();
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleSliderChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newRange = [...priceRange];
      newRange[index] = Number(value);
      setPriceRange(newRange);
    }
  };

  const applyFilterChanges = () => {
    updateFilter("price", priceRange);
    applyFilters(filters);
  };

  const resetPrices = () => {
    setPriceRange([minPrice, maxPrice]);
    updateFilter("price", null);
    applyFilters(filters);
  };

  return (
    <div>
      <h3>Цена</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Slider
          range
          min={minPrice}
          max={maxPrice}
          value={priceRange}
          onChange={handleSliderChange}
        />
        <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
          <Input
            size="large"
            value={priceRange[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            onBlur={() => setPriceRange([Math.max(minPrice, priceRange[0]), priceRange[1]])}
            type="number"
            prefix="от"
          />
          <Input
            size="large"
            value={priceRange[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            onBlur={() => setPriceRange([priceRange[0], Math.min(maxPrice, priceRange[1])])}
            type="number"
            prefix="до"
          />
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
          <Button size="large" style={{ width: "100%" }} onClick={resetPrices}>
            Сбросить
          </Button>
          <Button size="large" type="primary" style={{ width: "100%" }} onClick={applyFilterChanges}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
});

export default PriceFilter;
