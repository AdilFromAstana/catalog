import React, { memo, useState } from "react";
import { Badge } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const CategoryNavigation = memo(
  ({ toggleSortDrawer, togglePriceDrawer, isFilterSelected }) => {
    const [level, setLevel] = useState(1);
    const [parentId, setParentId] = useState(null);
    const filteredFlowers = useSelector((state) => state.filters.filteredItems);
    const [history, setHistory] = useState([]); // Стек истории переходов
    const [selectedCategory, setSelectedCategory] = useState({
      titleRu: "Цветы",
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
          <div className="nav-item">
            <LeftOutlined className="icon" />
          </div>
          <div className="category-info">
            <div className="category-title">
              {selectedCategory ? selectedCategory?.titleRu : "-"}
            </div>
            <div>{filteredFlowers.length}</div>
          </div>
          <div className="nav-item">
            <OrderedListOutlined className="icon" onClick={toggleSortDrawer} />
          </div>
          <div className="nav-item">
            <Badge dot={!isFilterSelected}>
              <ControlOutlined className="icon" />
            </Badge>
          </div>
        </div>
      </div>
    );
  },
);

export default CategoryNavigation;
