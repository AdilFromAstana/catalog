import React, { memo, useState } from "react";
import { Badge } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./CatalogToolbar.css";
import SortDrawer from "./Components/SortDrawer/SortDrawer";
import FilterDrawer from "./Components/FilterDrawer/FilterDrawer";

const CatalogToolbar = memo(
  ({
    tempFilters,
    isSortDrawerVisible,
    isPriceDrawerVisible,
    setIsPriceDrawerVisible,
    toggleSortDrawer,
    togglePriceDrawer,
  }) => {
    const filteredItems = useSelector((state) => state.filters.filteredItems);
    const [selectedCategory, setSelectedCategory] = useState({
      titleRu: "Цветы",
    });

    return (
      <div className="catalog-toolbar">
        <div className="catalog-toolbar__nav">
          <div
            className="catalog-toolbar__button"
            // onClick={returnToPreviousCategory}
          >
            <LeftOutlined className="catalog-toolbar__icon" />
          </div>
          <div className="catalog-toolbar__info">
            <div className="catalog-toolbar__title">
              {selectedCategory ? selectedCategory?.titleRu : "-"}
            </div>
            <div className="catalog-toolbar__count">{filteredItems.length}</div>
          </div>
          <div
            className="catalog-toolbar__button"
            onClick={() => toggleSortDrawer(true)}
          >
            <OrderedListOutlined className="catalog-toolbar__icon" />
          </div>
          <SortDrawer
            isSortDrawerVisible={isSortDrawerVisible}
            toggleSortDrawer={toggleSortDrawer}
          />
          <div className="catalog-toolbar__button" onClick={togglePriceDrawer}>
            <Badge dot={!tempFilters}>
              <ControlOutlined className="catalog-toolbar__icon" />
            </Badge>
          </div>
          <FilterDrawer
            isPriceDrawerVisible={isPriceDrawerVisible}
            setIsPriceDrawerVisible={setIsPriceDrawerVisible}
          />
        </div>
      </div>
    );
  },
);

export default CatalogToolbar;
