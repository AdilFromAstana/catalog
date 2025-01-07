import React from "react";
import { Badge, Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const CategoryNavigation = ({
  currentHierarchy,
  handleBackClick,
  handleCategoryClick,
  getCategoryTitle,
  toggleSortDrawer,
  togglePriceDrawer,
  productsTotalSize,
  isFilterSelected,
}) => {
  console.log("isFilterSelected: ", isFilterSelected);

  return (
    <div className="category-navigation">
      <div className="nav-wrapper">
        <div className="nav-item" onClick={handleBackClick}>
          <LeftOutlined className="icon" />
        </div>
        <div className="category-info">
          <div className="category-title">{getCategoryTitle()}</div>
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
      {currentHierarchy.length > 0 && (
        <div className="scrollable-row">
          {currentHierarchy.map((node) => (
            <Button
              key={node.title}
              type="primary"
              onClick={() => handleCategoryClick(node.title)}
            >
              {node.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNavigation;
