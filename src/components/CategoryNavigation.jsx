import React from "react";
import { Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const CategoryNavigation = ({
  currentHierarchy,
  availableProducts,
  handleBackClick,
  handleCategoryClick,
  getCategoryTitle,
  toggleSortDrawer,
  togglePriceDrawer,
}) => {
  return (
    <div className="category-navigation">
      <div className="nav-wrapper">
        <div className="nav-item" onClick={handleBackClick}>
          <LeftOutlined className="icon" />
        </div>
        <div className="category-info">
          <div className="category-title">{getCategoryTitle()}</div>
          <div>{availableProducts.length}</div>
        </div>
        <div className="nav-item">
          <OrderedListOutlined className="icon" onClick={toggleSortDrawer} />
        </div>
        <div className="nav-item">
          <ControlOutlined className="icon" onClick={togglePriceDrawer} />
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
