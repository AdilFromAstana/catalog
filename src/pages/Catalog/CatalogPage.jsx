import React, { useEffect, useMemo, useState } from "react";
import ProductList from "../../components/ProductList";
import CategoryNavigation from "../../components/CategoryNavigation";
import Filters from "../../components/Filters";
import DrawerFilters from "../../components/DrawerFilters";
import useFavorites from "../../hooks/useFavorites";
import { Content } from "antd/es/layout/layout";
import "./CatalogPage.css";
import { getDataById, getPaginatedData } from "../../firestoreService";
import { Spin } from "antd";

function findCategoryByKey(categories, key) {
  for (const category of categories) {
    if (category.key === key) return category;
    if (category.children) {
      const found = findCategoryByKey(category.children, key);
      if (found) return found;
    }
  }
  return null;
}

function getSelectedPath(categories, keys) {
  return keys.map((key) => findCategoryByKey(categories, key));
}

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
  const [selectedKeys, setSelectedKeys] = useState([]);
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
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 12;
  const language = "ru";

  const transformData = (items) => {
    return items.map((item) => {
      const title =
        language === "kz"
          ? item.titleKz
          : language === "en"
          ? item.titleEn
          : item.titleRu;

      const children = item.children ? transformData(item.children) : null;

      return {
        key: item.key,
        title: title,
        children: children,
      };
    });
  };

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

  // const currentHierarchy = hierarchyPath.reduce(
  //   (acc, curr) => acc.find((node) => node.title === curr)?.children || [],
  //   allCategories
  // );

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

  console.log("allCategories: ", allCategories);

  const selectedPath = getSelectedPath(allCategories, selectedKeys);

  const isFilterSelected = !tempMaxValue && !tempMinValue;

  useEffect(() => {
    function collectKeysWithoutChildren() {
      const result = [];

      function traverse(node) {
        // Если children равно null, добавляем key в результат
        if (!node.children) {
          result.push(node.key);
        } else {
          // Если есть дети, проходим по ним рекурсивно
          node.children.forEach((child) => traverse(child));
        }
      }

      // Проверяем последний элемент массива
      const lastElement = selectedPath[selectedPath.length - 1];
      if (lastElement) {
        traverse(lastElement);
      }

      return result;
    }
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
          categoryIdsFilter: collectKeysWithoutChildren(),
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
  }, [currentPage, sort, tempMaxValue, tempMinValue, selectedKeys]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // setIsLoading(true);
        const data = await getDataById("category", "AyZb1AB6NzYmh0YIfu8G");

        if (data && data.scheme) {
          setAllCategories([
            {
              key: 0,
              children: transformData(JSON.parse(data.scheme)),
              title: "Все категории",
            },
          ]);
          setSelectedKeys([0]);
        } else {
          console.error("Схема данных отсутствует или неверна");
          setAllCategories([]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        // setIsLoading(false); // Отключаем индикатор загрузки
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <Content>
        <Spin spinning={isLoading}>
          <CategoryNavigation
            isFilterSelected={isFilterSelected}
            // currentHierarchy={currentHierarchy}
            productsTotalSize={productsTotalSize}
            handleBackClick={handleBackClick}
            handleCategoryClick={handleCategoryClick}
            getCategoryTitle={getCategoryTitle}
            toggleSortDrawer={toggleSortDrawer}
            togglePriceDrawer={togglePriceDrawer}
          />
          <div className="catalog-container">
            <Filters
              productsTotalSize={productsTotalSize}
              allCategories={allCategories}
              setSelectedKeys={setSelectedKeys}
              selectedKeys={selectedKeys}
              minPrice={minPrice}
              maxPrice={maxPrice}
              tempMinValue={tempMinValue}
              tempMaxValue={tempMaxValue}
              colorsWithCounts={colorsWithCounts}
              selectedColors={selectedColors}
              handleColorChange={handleColorChange}
              setTempMinValue={setTempMinValue}
              setTempMaxValue={setTempMaxValue}
              handlePriceApply={handlePriceApply}
              handlePriceReset={handlePriceReset}
              // currentHierarchy={allCategories}
              handleCategoryClick={handleCategoryClick}
              selectedPath={selectedPath}
            />
            <ProductList
              isLoading={isLoading}
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
