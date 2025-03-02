import React, { memo, useEffect, useState } from "react";
import { Badge, Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useGetDataByCategory } from "../firestoreService";

const CategoryNavigation = memo(() => {
  const [level, setLevel] = useState(1);
  const [parentId, setParentId] = useState(null);
  const [history, setHistory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    titleRu: "Цветы",
    level: 1,
    parentId: null,
  });

  const { data } = useGetDataByCategory({
    endPoint: "categories/getCategoriesAndAttributesByLevelAndParent",
    level: selectedCategory.level,
    parentId: selectedCategory.parentId,
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setHistory((prev) => [...prev, { level, parentId }]);

    setParentId(category.id);
    setLevel(level + 1);
  };

  const returnToPreviousCategory = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
      return;
    }

    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setParentId(previousState.parentId);
      setLevel(previousState.level);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="category-navigation">
      <div className="nav-wrapper">
        <div className="nav-item" onClick={returnToPreviousCategory}>
          <LeftOutlined className="icon" />
        </div>
        <div className="category-info">
          <div className="category-title">
            {selectedCategory ? selectedCategory?.titleRu : "-"}
          </div>
          <div>{0}</div>
        </div>
        <div className="nav-item">
          <OrderedListOutlined className="icon" />
          {/* <OrderedListOutlined className="icon" onClick={toggleSortDrawer} /> */}
        </div>
        <div className="nav-item">
          <Badge>
            {/* <ControlOutlined className="icon" onClick={togglePriceDrawer} /> */}
            <ControlOutlined className="icon" />
          </Badge>
        </div>
      </div>
      {!data?.categories ? null : (
        <div className="scrollable-row">
          {data?.categories?.map((category) => (
            <Button
              key={category.id}
              type="primary"
              onClick={() => handleCategoryClick(category)}
            >
              {category.titleRu}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
});

export default CategoryNavigation;
