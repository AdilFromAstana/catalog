import React, { useEffect, useMemo, useState } from "react";
import ProductList from "../../components/ProductList";
import CategoryNavigation from "../../components/CategoryNavigation";
import Filters from "../../components/Filters";
import DrawerFilters from "../../components/DrawerFilters";
import useFavorites from "../../hooks/useFavorites";
import { Content } from "antd/es/layout/layout";
import "./CatalogPage.css";
import { getPaginatedData } from "../../firestoreService";
import { Spin } from "antd";

const CatalogPage = () => {
  const [isSortDrawerVisible, setSortDrawerVisible] = useState(false);
  const [isPriceDrawerVisible, setPriceDrawerVisible] = useState(false);
  const [sort, setSort] = useState({
    by: "price",
    order: "asc",
    value: "priceasc",
  });
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [hierarchyPath, setHierarchyPath] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [tempMinValue, setTempMinValue] = useState(null);
  const [tempMaxValue, setTempMaxValue] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsTotalSize, setProductsTotalSize] = useState(1);
  const [lastVisible, setLastVisible] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const colorsWithCounts = useMemo(() => {
    const colorCounts = {};
    products.forEach((product) => {
      if (product.color) {
        colorCounts[product.color] = (colorCounts[product.color] || 0) + 1;
      }
    });
    return Object.entries(colorCounts).map(([color, count]) => ({
      color,
      count,
    }));
  }, [products]);

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
    setSort(value);
    toggleSortDrawer();
  };

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
    setProducts(
      products.filter(
        (product) =>
          product.price >= tempMinValue &&
          product.price <= tempMaxValue &&
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

  const isFilterSelected = !tempMaxValue && !tempMinValue;

  // useEffect(() => {
  //   const currentCategory = hierarchyPath[hierarchyPath.length - 1];

  //   const filteredByCategory = products.filter((product) => {
  //     return !currentCategory || product.category.includes(currentCategory);
  //   });

  //   if (filteredByCategory.length > 0) {
  //     const prices = filteredByCategory.map((product) => product.price);
  //     const min = Math.min(...prices);
  //     const max = Math.max(...prices);

  //     setMinPrice(min);
  //     setMaxPrice(max);

  //     if (tempMinValue === 0 && tempMaxValue === 0) {
  //       setTempMinValue(min);
  //       setTempMaxValue(max);
  //     }
  //   } else {
  //     setMinPrice(0);
  //     setMaxPrice(0);
  //     setTempMinValue(0);
  //     setTempMaxValue(0);
  //   }

  //   const filteredProducts = filteredByCategory.filter((product) => {
  //     const matchesPrice =
  //       product.price >= tempMinValue && product.price <= tempMaxValue;
  //     const matchesColor =
  //       selectedColors.length === 0 || selectedColors.includes(product.color);

  //     return matchesPrice && matchesColor;
  //   });

  //   setProducts(filteredProducts);
  // }, [hierarchyPath, tempMinValue, tempMaxValue, selectedColors]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const {
          data,
          lastVisible: newLastVisible,
          totalSize,
          maxPrice,
          minPrice,
        } = await getPaginatedData({
          collectionName: "items",
          pageSize: itemsPerPage,
          currentPage: currentPage,
          lastVisible: lastVisible,
          sort: sort,
          maxPriceFilter: tempMaxValue,
          minPriceFilter: tempMinValue,
        });
        setProductsTotalSize(totalSize);
        setProducts(data);
        setLastVisible(newLastVisible);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, sort, tempMaxValue, tempMinValue]);

  return (
    <>
      <Content>
        <Spin spinning={isLoading}>
          <CategoryNavigation
            isFilterSelected={isFilterSelected}
            currentHierarchy={currentHierarchy}
            productsTotalSize={productsTotalSize}
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
            />
            <ProductList
              products={products}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              handleSortChange={handleSortChange}
              sort={sort}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalProducts={productsTotalSize}
            />
          </div>
        </Spin>
      </Content>
      <DrawerFilters
        isSortDrawerVisible={isSortDrawerVisible}
        isPriceDrawerVisible={isPriceDrawerVisible}
        toggleSortDrawer={toggleSortDrawer}
        togglePriceDrawer={togglePriceDrawer}
        setTempMinValue={setTempMinValue}
        setTempMaxValue={setTempMaxValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleSortChange={handleSortChange}
      />
    </>
  );
};

export default CatalogPage;
