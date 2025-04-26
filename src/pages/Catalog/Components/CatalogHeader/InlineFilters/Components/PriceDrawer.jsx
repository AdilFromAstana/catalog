import { Button, Drawer, Slider, InputNumber } from "antd";
import { memo } from "react";

const PriceDrawer = memo(
  ({
    visible,
    onClose,
    priceRange,
    tempPrice,
    setTempPrice,
    onReset,
    onApply,
  }) => {
    const handleInputChange = (index, value) => {
      const newValue = [...tempPrice];
      newValue[index] = Number(value) || 0;
      setTempPrice(newValue);
    };

    return (
      <Drawer
        title="Цена"
        placement="bottom"
        onClose={onClose}
        open={visible}
        height="60svh"
        styles={{
          header: {
            color: "#4f4f4f",
            fontSize: "24px",
          },
          body: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: 12,
          },
        }}
        rootClassName="inline-filters-header"
      >
        <div style={{ flex: 1, marginTop: 10 }}>
          <Slider
            marks={{
              [priceRange.min]: {
                style: {
                  color: "#4f4f4f",
                },
                label: <strong>{priceRange.min}₸</strong>,
              },
              [priceRange.max]: {
                style: {
                  color: "#4f4f4f",
                },
                label: <strong>{priceRange.max}₸</strong>,
              },
            }}
            range
            min={priceRange.min}
            max={priceRange.max}
            value={tempPrice}
            onChange={(values) => setTempPrice(values)}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginTop: 16,
            }}
          >
            <InputNumber
              min={priceRange.min}
              max={priceRange.max}
              value={tempPrice[0]}
              onChange={(value) => handleInputChange(0, value)}
              style={{ width: "100%" }}
              placeholder="от"
            />
            <InputNumber
              min={priceRange.min}
              max={priceRange.max}
              value={tempPrice[1]}
              onChange={(value) => handleInputChange(1, value)}
              style={{ width: "100%" }}
              placeholder="до"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            paddingTop: "20px",
            borderTop: "2px solid black",
          }}
        >
          <Button size="large" onClick={onReset} style={{ width: "100%" }}>
            Сбросить
          </Button>
          <Button
            size="large"
            onClick={onApply}
            type="primary"
            style={{ width: "100%", background: "#4f4f4f" }}
          >
            Применить
          </Button>
        </div>
      </Drawer>
    );
  },
);

export default PriceDrawer;
