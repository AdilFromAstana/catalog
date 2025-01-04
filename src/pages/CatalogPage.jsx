import React, { useEffect, useState } from "react";
import { Button, Drawer, Radio, Input, Slider } from "antd";
import {
  ControlOutlined,
  LeftOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import ProductList from "../components/ProductList";
import useFavorites from "../hooks/useFavorites";
import mockProducts from "../mockProducts";
import { Content } from "antd/es/layout/layout";
import "./CatalogPage.css";

const CatalogPage = () => {
  const [isSortDrawerVisible, setSortDrawerVisible] = useState(false);
  const [isPriceDrawerVisible, setPriceDrawerVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [availableProducts, setAvailableProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [hierarchyPath, setHierarchyPath] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [tempMinValue, setTempMinValue] = useState(minPrice);
  const [tempMaxValue, setTempMaxValue] = useState(maxPrice);
  const { favorites, toggleFavorite } = useFavorites();

  const handleCategoryClick = (category) => {
    setHierarchyPath((prev) => [...prev, category]);
  };

  const handleBackClick = () => {
    setHierarchyPath((prev) => prev.slice(0, -1));
  };

  const currentHierarchy = hierarchyPath.reduce(
    (acc, curr) => acc.find((node) => node.title === curr)?.children || [],
    allCategories
  );

  const toggleSortDrawer = (open) => {
    setSortDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const togglePriceDrawer = (open) => {
    setPriceDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    toggleSortDrawer();
  };

  const sortedProducts = [...availableProducts].sort((a, b) => {
    switch (sortOrder) {
      case "asc":
        return a.unitPrice - b.unitPrice;
      case "desc":
        return b.unitPrice - a.unitPrice;
      default:
        return 0;
    }
  });

  const getCategoryTitle = () => {
    return hierarchyPath.length === 0
      ? "Все категории"
      : hierarchyPath[hierarchyPath.length - 1];
  };

  const handleSliderChange = ([min, max]) => {
    setTempMinValue(min);
    setTempMaxValue(max);
  };

  const handleTempMinChange = (value) => {
    const min = Math.min(Number(value), tempMaxValue); // Убедиться, что min <= max
    setTempMinValue(min);
  };

  const handleTempMaxChange = (value) => {
    const max = Math.min(Number(value), maxPrice); // Ограничиваем максимум
    setTempMaxValue(max >= tempMinValue ? max : tempMinValue); // Убедиться, что max >= min
  };

  const handlePriceApply = () => {
    setAvailableProducts(
      mockProducts.filter(
        (product) =>
          product.unitPrice >= tempMinValue &&
          product.unitPrice <= tempMaxValue &&
          (!hierarchyPath.length ||
            product.category.includes(hierarchyPath[hierarchyPath.length - 1]))
      )
    );
    setPriceDrawerVisible(false); // Закрываем фильтр
  };

  const handlePriceReset = () => {
    setTempMinValue(minPrice);
    setTempMaxValue(maxPrice);
    setPriceDrawerVisible(false);
  };

  useEffect(() => {
    const currentCategory = hierarchyPath[hierarchyPath.length - 1];

    const filteredByCategory = mockProducts.filter((product) => {
      return !currentCategory || product.category.includes(currentCategory);
    });

    if (filteredByCategory.length > 0) {
      const prices = filteredByCategory.map((product) => product.unitPrice);
      const min = Math.min(...prices);
      const max = Math.max(...prices);

      setMinPrice(min);
      setMaxPrice(max);

      if (tempMinValue === 0 && tempMaxValue === 0) {
        setTempMinValue(min);
        setTempMaxValue(max);
      }
    } else {
      setMinPrice(0);
      setMaxPrice(0);
      setTempMinValue(0);
      setTempMaxValue(0);
    }

    const filteredProducts = filteredByCategory.filter((product) => {
      return (
        product.unitPrice >= tempMinValue && product.unitPrice <= tempMaxValue
      );
    });

    setAvailableProducts(filteredProducts);
  }, [hierarchyPath, tempMinValue, tempMaxValue]);

  useEffect(() => {
    const hierarchy = {};

    mockProducts.forEach((product) => {
      let current = hierarchy;

      product.category.forEach((cat, index) => {
        if (!current[cat]) {
          current[cat] = {
            title: cat,
            children: index === product.category.length - 1 ? null : {},
          };
        }
        current = current[cat].children;
      });
    });

    const convertToTree = (node) =>
      Object.entries(node).map(([key, value]) => ({
        title: key,
        children: value.children ? convertToTree(value.children) : null,
      }));

    setAllCategories(convertToTree(hierarchy));
  }, []);

  return (
    <>
      <Content>
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
                onClick={() => {
                  handleCategoryClick(node.title);
                }}
              >
                {node.title}
              </Button>
            ))}
          </div>
        )}
        <ProductList
          products={sortedProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </Content>
      <Drawer
        title="Сортировка"
        placement="bottom"
        onClose={() => toggleSortDrawer(false)}
        open={isSortDrawerVisible}
      >
        <Radio.Group
          onChange={(e) => handleSortChange(e.target.value)}
          defaultValue="asc"
          className="radio-group"
        >
          {[
            { value: "asc", label: "Сначала дешевые" },
            { value: "desc", label: "Сначала дорогие" },
            { value: "new", label: "Новинки" },
          ].map((option) => (
            <Radio
              key={option.value}
              className="radio-option"
              value={option.value}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Drawer>
      <Drawer
        title="Цена"
        placement="bottom"
        onClose={() => togglePriceDrawer(false)}
        open={isPriceDrawerVisible}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Input
            size="large"
            value={tempMinValue}
            onChange={(e) => handleTempMinChange(e.target.value)}
            min={minPrice}
            max={maxPrice}
            type="tel"
            prefix="от"
          />
          <Input
            size="large"
            value={tempMaxValue}
            onChange={(e) => handleTempMaxChange(e.target.value)}
            min={minPrice}
            max={maxPrice}
            type="tel"
            prefix="до"
          />
        </div>
        <Slider
          range
          value={[tempMinValue, tempMaxValue]}
          min={minPrice}
          max={maxPrice}
          onChange={handleSliderChange}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="large"
            style={{ width: "100%" }}
            onClick={handlePriceReset}
          >
            Сбросить
          </Button>
          <Button
            size="large"
            type="primary"
            style={{ width: "100%" }}
            onClick={handlePriceApply}
          >
            Применить
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default CatalogPage;
