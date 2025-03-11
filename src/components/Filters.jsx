import { Button, Checkbox, Input, List, Slider } from "antd";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Filters = memo(() => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, categoryPath } = useSelector(
    (state) => state.categories,
  );

  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [minMaxObject, setMinMaxObject] = useState({});

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
    <div className="filter-component">
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
    </div>
  );
});

export default Filters;
