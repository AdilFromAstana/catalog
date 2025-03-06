import React from "react";
import { List, Checkbox } from "antd";

const FiltersList = ({ options, activeFilter, tempFilters, onSelectItem }) => (
  <List
    dataSource={options}
    renderItem={(option) => (
      <List.Item>
        <Checkbox
          style={{ width: "100%", color: "#FEFBEA", fontSize: 20 }}
          checked={tempFilters[activeFilter]?.includes(option.value)}
          onChange={() => onSelectItem(activeFilter, option.value)}
        >
          {option.value} ({option.count})
        </Checkbox>
      </List.Item>
    )}
  />
);

export default FiltersList;
