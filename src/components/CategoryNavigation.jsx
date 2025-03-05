import React, { memo, useEffect } from "react";
import { Badge, Button, Breadcrumb, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import {
  useGetCategoryHierarchiesByBusiness,
  useFetchItemsByCategory,
} from "../firestoreService";
import {
  setCategories,
  selectCategory,
  goBackCategory,
} from "../redux/categorySlice";
import { setItems } from "../redux/itemsSlice";

const CategoryNavigation = memo(() => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, categoryPath } = useSelector(
    (state) => state.categories,
  );
  const { data } = useGetCategoryHierarchiesByBusiness(1);

  // Используем React Query для запроса товаровя
  const { items } = useFetchItemsByCategory({
    categoryId: selectedCategory,
    businessId: 1,
  });

  useEffect(() => {
    if (data) {
      dispatch(setCategories(data));
    }
  }, [data, dispatch]);

  const handleCategoryClick = (category) => {
    if (!category || selectedCategory?.id === category.id) return;
    dispatch(selectCategory(category)); // Меняем категорию
  };

  const handleBack = () => {
    dispatch(goBackCategory());
  };

  useEffect(() => {
    dispatch(setItems(items));
  }, []);

  return (
    <div className="category-navigation">
      <Breadcrumb style={{ marginBottom: "16px" }}>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        {categoryPath.map((category, index) => (
          <Breadcrumb.Item key={category.id}>
            {category.titleRu}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>

      <div className="nav-wrapper">
        <div className="nav-item" onClick={handleBack}>
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

      <div className="scrollable-row">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Button
              key={category.id}
              type="primary"
              onClick={() => handleCategoryClick(category)}
            >
              {category.titleRu}
            </Button>
          ))
        ) : (
          <p>Нет подкатегорий</p>
        )}
      </div>
    </div>
  );
});

export default CategoryNavigation;
