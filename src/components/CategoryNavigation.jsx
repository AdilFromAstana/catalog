import React, { memo, useState } from "react";
import { Badge, Button } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useGetDataByCategory } from "../firestoreService";
import { useSelector } from "react-redux";

const CategoryNavigation = memo(
  ({ toggleSortDrawer, togglePriceDrawer, isFilterSelected }) => {
    const [level, setLevel] = useState(1);
    const [parentId, setParentId] = useState(null);
    const filteredProducts = useSelector(
      (state) => state.filters.filteredProducts,
    );
    const [history, setHistory] = useState([]); // Стек истории переходов
    const [selectedCategory, setSelectedCategory] = useState({
      titleRu: "Цветы",
    }); // Выбранная категория на последнем уровне

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
            <div>{filteredProducts.length}</div>
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
        {/* {!availableCategories ? null : (
          <div className="scrollable-row">
            {availableCategories?.categories?.map((category) => (
              <Button
                key={category.id}
                type="primary"
                onClick={() => handleCategoryClick(category)}
              >
                {category.titleRu}
              </Button>
            ))}
          </div>
        )} */}
      </div>
    );
  },
);

export default CategoryNavigation;
