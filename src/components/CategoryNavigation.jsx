import React from "react";
import { Badge, Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const CategoryNavigation = ({
  toggleSortDrawer,
  togglePriceDrawer,
  productsTotalSize,
  isFilterSelected,
  availableCategories,
  selectCategory,
  categoryTitle,
  returnToPreviousCategory,
}) => {
  return (
    <div className="category-navigation">
      <div className="nav-wrapper">
        <div className="nav-item" onClick={returnToPreviousCategory}>
          <LeftOutlined className="icon" />
        </div>
        <div className="category-info">
          <div className="category-title">{categoryTitle}</div>
          <div>{productsTotalSize}</div>
        </div>
        <div className="nav-item">
          <OrderedListOutlined className="icon" onClick={toggleSortDrawer} />
        </div>
        <div className="nav-item">
          <Badge dot={!isFilterSelected}>
            <ControlOutlined className="icon" onClick={togglePriceDrawer} />
          </Badge>
        </div>
      </div>
      {availableCategories.length > 0 && (
        <div className="scrollable-row">
          {availableCategories.map((category) => (
            <Button
              key={category.title}
              type="primary"
              onClick={() => selectCategory(category.key)}
            >
              {category.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNavigation;
