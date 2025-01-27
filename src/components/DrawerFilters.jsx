import { Drawer, Radio } from "antd";
import { memo } from "react";

const DrawerFilters = memo(
  ({ isSortDrawerVisible, toggleSortDrawer, handleSortChange }) => {
    return (
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
    );
  }
);

export default DrawerFilters;
