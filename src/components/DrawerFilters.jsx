import { Button, Drawer, Input, Radio } from "antd";
import { memo, useEffect, useState } from "react";

const DrawerFilters = memo(
  ({
    isSortDrawerVisible,
    isPriceDrawerVisible,
    toggleSortDrawer,
    togglePriceDrawer,
    setTempMinValue,
    setTempMaxValue,
    minPrice,
    maxPrice,
    handleSortChange,
  }) => {
    const [localMinPrice, setLocalMinPrice] = useState(minPrice);
    const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);

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

    const submitPrices = () => {
      setTempMinValue(localMinPrice);
      setTempMaxValue(localMaxPrice);
      togglePriceDrawer(false);
    };

    const resetPrices = () => {
      setTempMinValue(null);
      setTempMaxValue(null);
      setLocalMinPrice(minPrice);
      setLocalMaxPrice(maxPrice);
      togglePriceDrawer(false);
    };

    useEffect(() => {
      setLocalMinPrice(Number(minPrice));
      setLocalMaxPrice(Number(maxPrice));
    }, [minPrice, maxPrice]);

    return (
      <>
        <Drawer
          title="Сортировка"
          placement="bottom"
          onClose={() => toggleSortDrawer(false)}
          open={isSortDrawerVisible}
        >
          <Radio.Group defaultValue="priceasc" className="radio-group">
            {[
              {
                value: "priceasc",
                by: "price",
                order: "asc",
                label: "Сначала дешевые",
              },
              {
                value: "pricedesc",
                by: "price",
                order: "desc",
                label: "Сначала дорогие",
              },
              {
                value: "createAtasc",
                by: "createAt",
                order: "asc",
                label: "Новинки",
              },
              {
                value: "createAtdesc",
                by: "createAt",
                order: "desc",
                label: "Старые",
              },
            ].map((option) => (
              <Radio
                onClick={() => handleSortChange(option)}
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
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
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
                paddingTop: "10px",
                borderTop: "2px solid black",
              }}
            >
              <Button
                size="large"
                style={{ width: "100%" }}
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
        </Drawer>
      </>
    );
  }
);

export default DrawerFilters;
