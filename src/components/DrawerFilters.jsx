import { Drawer, Radio } from "antd";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../redux/filterSlice";

const DrawerFilters = memo(({ isSortDrawerVisible, toggleSortDrawer }) => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.filters.sortOrder);

  const handleSortChange = (option) => {
    dispatch(setSortOrder(option));
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
      <Radio.Group value={sortOrder?.value}>
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
            value: "createAt_desc",
            by: "createAt",
            order: "desc",
            label: "Сначала новые",
          },
          {
            value: "createAt_asc",
            by: "createAt",
            order: "asc",
            label: "Сначала старые",
          },
        ].map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            onChange={() => handleSortChange(option)}
            style={{ color: "#FEFBEA", fontSize: "20px" }}
          >
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Drawer>
  );
});

export default DrawerFilters;
