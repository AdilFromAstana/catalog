import { Drawer, Radio } from "antd";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../redux/filterSlice";

const DrawerFilters = memo(({ isSortDrawerVisible, toggleSortDrawer }) => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.filters.sortOrder);

  const handleSortChange = (value) => {
    const [by, order] = value.split("_"); // Разделяем строку "price_asc" на ["price", "asc"]
    dispatch(setSortOrder({ by, order })); // Обновляем Redux
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
        onChange={(e) => handleSortChange(e.target.value)} // Вызывает сортировку
        value={`${sortOrder.by}_${sortOrder.order}`} // Формируем строку "price_asc"
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
          {
            value: "createAt_asc",
            by: "createAt",
            order: "asc",
            label: "Новинки",
          },
          {
            value: "createAt_desc",
            by: "createAt",
            order: "desc",
            label: "Старые",
          },
        ].map((option) => (
          <Radio
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
