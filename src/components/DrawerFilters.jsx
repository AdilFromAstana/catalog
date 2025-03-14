import { Drawer, Radio } from "antd";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../redux/filterSlice";

const DrawerFilters = memo(({ isSortDrawerVisible, toggleSortDrawer }) => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.filters.order);
  console.log("sortOrder: ", sortOrder);

  const handleSortChange = (value) => {
    dispatch(setSortOrder(value));
    toggleSortDrawer(false);
  };

  return (
    <Drawer
      title="Сортировка"
      placement="bottom"
      onClose={() => toggleSortDrawer(false)}
      open={isSortDrawerVisible}
      styles={{
        header: {
          backgroundColor: "#091235",
          color: "#FEFBEA",
          fontSize: "24px",
        },
        body: {
          color: "#FEFBEA",
          fontSize: "24px",
          background: "#091235",
        },
      }}
      rootClassName="inline-filters-header"
    >
      <Radio.Group
        className="radio-group"
        value={sortOrder?.value} // Формируем строку "price_asc"
      >
        {[
          {
            value: "price_asc",
            by: "price",
            order: "asc",
            label: "Сначала дешевые",
          },
          {
            value: "price_desc",
            by: "price",
            order: "desc",
            label: "Сначала дорогие",
          },
          // {
          //   value: "createAt_asc",
          //   by: "createAt",
          //   order: "asc",
          //   label: "Новинки",
          // },
          // {
          //   value: "createAt_desc",
          //   by: "createAt",
          //   order: "desc",
          //   label: "Старые",
          // },
        ].map((option) => (
          <Radio
            onChange={(e) => handleSortChange(option)} // Вызывает сортировку
            key={option.value}
            value={option.value} // Передаем "price_asc", "price_desc" и т. д.
            style={{ color: "#FEFBEA", fontSize: "20px" }}
            className="radio-option"
          >
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Drawer>
  );
});

export default DrawerFilters;
