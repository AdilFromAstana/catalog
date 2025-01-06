import { Button, Drawer, Input, Radio } from "antd";

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
              onClick={() =>
                handleSortChange({ by: option.by, order: option.order })
              }
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
      </Drawer>
    </>
  );
};

export default DrawerFilters;
