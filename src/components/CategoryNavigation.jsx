import React, { memo, useEffect } from "react";
import { Badge, Button, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import {
  useFetchItemsByCategory,
  useGetAttributeCounts,
  useGetCategoryHierarchiesByBusiness,
} from "../firestoreService";
import {
  setCategories,
  selectCategory,
  goBackCategory,
} from "../redux/categorySlice";
import {
  resetItems,
  setItems,
  resetAllFilters,
  setItemsLoading,
} from "../redux/itemsSlice";
import { setAttributes } from "../redux/attributesSlice";

const CategoryNavigation = memo(() => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, categoryPath } = useSelector(
    (state) => state.categories,
  );

  const { data } = useGetCategoryHierarchiesByBusiness(1);

  const { data: items, isLoading: isItemsLoading } = useFetchItemsByCategory({
    categoryId: selectedCategory?.id || null,
    businessId: 1,
  });

  const { data: attributes } = useGetAttributeCounts({
    categoryId: selectedCategory?.id || null,
    businessId: 1,
    enabled: selectedCategory?.hasChild === false,
  });

  useEffect(() => {
    dispatch(setAttributes(attributes));
  }, [attributes]);

  useEffect(() => {
    if (!items) return;

    dispatch(setItems(items));
  }, [items]);

  useEffect(() => {
    dispatch(setItemsLoading(isItemsLoading));
  }, [isItemsLoading]);

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  }, [data, dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    dispatch(resetItems()); // Сбрасываем предыдущие товары
  };

  const handleBack = () => {
    dispatch(goBackCategory());
    dispatch(resetAllFilters());
  };

  const handleBreadcrumbClick = (index) => {
    const newPath = categoryPath.slice(0, index + 1);
    dispatch(
      setCategories(
        newPath.length > 0 ? newPath[newPath.length - 1].children : data,
      ),
    );
  };

  const currentCategories = selectedCategory
    ? selectedCategory.children || []
    : categories;

  const breadcrumbItems = [
    {
      title: "Главная",
      onClick: () => handleBreadcrumbClick(-1),
    },
    ...categoryPath.map((category, index) => ({
      title: category.titleRu,
      onClick: () => handleBreadcrumbClick(index),
    })),
  ];

  return (
    <div className="category-navigation">
      {/* <Breadcrumb
        style={{ marginBottom: "16px", color: "white" }}
        items={breadcrumbItems}
      /> */}

      <div className="nav-wrapper">
        <div
          className="nav-item"
          onClick={handleBack}
          style={{
            cursor: categoryPath.length > 0 ? "pointer" : "default",
            opacity: categoryPath.length > 0 ? 1 : 0.5,
          }}
        >
          <LeftOutlined className="icon" />
        </div>
        <div className="category-info">
          <div className="category-title">
            {selectedCategory ? selectedCategory.titleRu : "Категории"}
          </div>
        </div>
        <div className="nav-item">
          <OrderedListOutlined className="icon" />
        </div>
        <div className="nav-item">
          <Badge>
            <ControlOutlined className="icon" />
          </Badge>
        </div>
      </div>

      {currentCategories.length > 0 && (
        <div className="scrollable-row">
          {currentCategories.map((category) => (
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
