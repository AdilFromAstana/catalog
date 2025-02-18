import React, { memo, useState } from "react";
import { Badge, Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useGetDataByCategory } from "../firestoreService";

const CategoryNavigation = memo(
  ({
    toggleSortDrawer,
    togglePriceDrawer,
    productsTotalSize,
    isFilterSelected,
    selectCategory,
    categoryTitle,
    returnToPreviousCategory,
  }) => {
    const [level, setLevel] = useState(1);
    const [parentId, setParentId] = useState(null);

    const {
      data: availableCategories = [],
      isLoading,
      error,
    } = useGetDataByCategory(
      "categories/getCategoriesByLevelAndParent",
      level,
      parentId
    );

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
        {isLoading ? (
          <div>Loading categories...</div>
        ) : error ? (
          <div>Error loading categories</div>
        ) : availableCategories.length > 0 ? (
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
        ) : null}
      </div>
    );
  }
);

export default CategoryNavigation;
