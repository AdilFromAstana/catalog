import React, { useEffect, useMemo, useState } from "react";
import ProductList from "../components/ProductList";
import CategoryNavigation from "../components/CategoryNavigation";
import Filters from "../components/Filters";
import DrawerFilters from "../components/DrawerFilters";
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
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [tempMinValue, setTempMinValue] = useState(minPrice);
  const [tempMaxValue, setTempMaxValue] = useState(maxPrice);
  const { favorites, toggleFavorite } = useFavorites();

  const findCategoryPath = (categories, targetCategory, path = []) => {
    for (const category of categories) {
      if (category.title === targetCategory) {
        return [...path, category];
      }
      if (category.children) {
        const result = findCategoryPath(category.children, targetCategory, [
          ...path,
          category,
        ]);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const handleTreeCategoryClick = (category) => {
    const categoryPath = findCategoryPath(allCategories, category);
    setHierarchyPath(categoryPath.map((node) => node.title));

    const filteredProducts = mockProducts.filter((product) =>
      categoryPath.some((node) => product.category.includes(node.title))
    );

    setAvailableProducts(filteredProducts);
  };

  const colorsWithCounts = useMemo(() => {
    const colorCounts = {};
    availableProducts.forEach((product) => {
      if (product.color) {
        colorCounts[product.color] = (colorCounts[product.color] || 0) + 1;
      }
    });
    return Object.entries(colorCounts).map(([color, count]) => ({
      color,
      count,
    }));
  }, [availableProducts]);

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((selectedColor) => selectedColor !== color)
        : [...prev, color]
    );
  };

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

  const sortedProducts = useMemo(() => {
    return [...availableProducts].sort((a, b) => {
      switch (sortOrder) {
        case "asc":
          return a.unitPrice - b.unitPrice;
        case "desc":
          return b.unitPrice - a.unitPrice;
        default:
          return 0;
      }
    });
  }, [availableProducts, sortOrder]);

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
    const min = Math.min(Number(value), tempMaxValue);
    setTempMinValue(min);
  };

  const handleTempMaxChange = (value) => {
    const max = Math.min(Number(value), maxPrice);
    setTempMaxValue(max >= tempMinValue ? max : tempMinValue);
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
      const matchesPrice =
        product.unitPrice >= tempMinValue && product.unitPrice <= tempMaxValue;
      const matchesColor =
        selectedColors.length === 0 || selectedColors.includes(product.color);

      return matchesPrice && matchesColor;
    });

    setAvailableProducts(filteredProducts);
  }, [hierarchyPath, tempMinValue, tempMaxValue, selectedColors]);

  useEffect(() => {
    const hierarchy = {};

    mockProducts.forEach((product) => {
      let current = hierarchy;

      product.category.forEach((cat, index) => {
        if (!current[cat]) {
          current[cat] = {
            title: cat,
            count: 0,
            children: index === product.category.length - 1 ? null : {},
          };
        }
        current[cat].count += 1; // Увеличиваем счётчик товаров в категории
        current = current[cat].children;
      });
    });

    const convertToTree = (node) =>
      Object.entries(node).map(([key, value]) => ({
        title: key,
        count: value.count,
        key,
        children: value.children ? convertToTree(value.children) : null,
      }));

    setAllCategories(convertToTree(hierarchy));
  }, []);

  return (
    <>
      <Content>
        <CategoryNavigation
          currentHierarchy={currentHierarchy}
          availableProducts={availableProducts}
          handleBackClick={handleBackClick}
          handleCategoryClick={handleCategoryClick}
          getCategoryTitle={getCategoryTitle}
          toggleSortDrawer={toggleSortDrawer}
          togglePriceDrawer={togglePriceDrawer}
        />
        <div className="catalog-container">
          <Filters
            minPrice={minPrice}
            maxPrice={maxPrice}
            tempMinValue={tempMinValue}
            tempMaxValue={tempMaxValue}
            colorsWithCounts={colorsWithCounts}
            selectedColors={selectedColors}
            handleTempMinChange={handleTempMinChange}
            handleTempMaxChange={handleTempMaxChange}
            handleColorChange={handleColorChange}
            handlePriceApply={handlePriceApply}
            handlePriceReset={handlePriceReset}
            currentHierarchy={allCategories}
            handleCategoryClick={handleCategoryClick}
            handleTreeCategoryClick={handleTreeCategoryClick}
          />
          <ProductList
            products={sortedProducts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleSortChange={handleSortChange}
            sortOrder={sortOrder}
          />
        </div>
      </Content>
      <DrawerFilters
        isSortDrawerVisible={isSortDrawerVisible}
        isPriceDrawerVisible={isPriceDrawerVisible}
        toggleSortDrawer={toggleSortDrawer}
        togglePriceDrawer={togglePriceDrawer}
        tempMinValue={tempMinValue}
        tempMaxValue={tempMaxValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleTempMinChange={handleTempMinChange}
        handleTempMaxChange={handleTempMaxChange}
        handleSliderChange={handleSliderChange}
        handlePriceReset={handlePriceReset}
        handlePriceApply={handlePriceApply}
        handleSortChange={handleSortChange}
      />
    </>
  );
};

export default CatalogPage;
