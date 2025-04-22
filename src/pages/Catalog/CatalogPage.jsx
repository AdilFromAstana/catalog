import React, { useEffect, useRef, useState } from "react";
import ProductList from "../../components/ProductList";
import CategoryNavigation from "../../components/CategoryNavigation";
import Filters from "../../components/Filters";
import DrawerFilters from "../../components/DrawerFilters";
import useFavorites from "../../hooks/useFavorites";
import "./CatalogPage.css";
import { Drawer, Spin } from "antd";
import useCategory from "../../hooks/useCategory";
import InlineFilters from "../../components/InlineFilters/InlineFilters";

const CatalogPage = () => {
  const [categoryFiltersContainerPadding, setCategoryFiltersContainerPadding] =
    useState(0);
  const [isSortDrawerVisible, setSortDrawerVisible] = useState(false);
  const [isPriceDrawerVisible, setPriceDrawerVisible] = useState(false);
  const [sort, setSort] = useState({
    by: "price",
    order: "asc",
    value: "priceasc",
  });
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tempMinValue, setTempMinValue] = useState(null);
  const [tempMaxValue, setTempMaxValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsTotalSize, setProductsTotalSize] = useState(1);
  const [lastVisible, setLastVisible] = useState(null);
  const itemsPerPage = 12;
  const ref = useRef(null);

  const {
    availableCategories,
    selectedCategoryKeys,
    selectCategory,
    categoryTitle,
    selectedCategories,
    isCategoryLoading,
    backToAlreadySelectedCategory,
    returnToPreviousCategory,
  } = useCategory();

  const { favorites, toggleFavorite } = useFavorites();

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((selectedColor) => selectedColor !== color)
        : [...prev, color],
    );
  };

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

  const handlePriceReset = () => {
    setTempMinValue(minPrice);
    setTempMaxValue(maxPrice);
    setPriceDrawerVisible(false);
  };

  const isFilterSelected = !tempMaxValue && !tempMinValue;

  useEffect(() => {
    if (ref.current) {
      setCategoryFiltersContainerPadding(
        ref.current.getBoundingClientRect().height,
      );
    }
  }, [ref.current]);

  return (
    <>
      <Spin
        spinning={isLoading && isCategoryLoading}
        wrapperClassName="main-page-container"
      >
        <div className="category-filters-container" ref={ref}>
          <CategoryNavigation
            isLoading={isLoading}
            categoryTitle={categoryTitle}
            availableCategories={availableCategories}
            returnToPreviousCategory={returnToPreviousCategory}
            isFilterSelected={isFilterSelected}
            productsTotalSize={productsTotalSize}
            toggleSortDrawer={toggleSortDrawer}
            togglePriceDrawer={togglePriceDrawer}
            selectCategory={selectCategory}
          />
          <InlineFilters />
        </div>
        <div
          className="catalog-container"
          style={{ marginTop: `${categoryFiltersContainerPadding}px` }}
        >
          <ProductList
            isLoading={isLoading}
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
      <Drawer
        title="Фильтры"
        placement="bottom"
        styles={{
          wrapper: {
            height: "100%",
          },
          header: {
            backgroundColor: "#091235",
            color: "#4f4f4f",
            fontSize: "24px",
          },
          body: {
            color: "#4f4f4f",
            fontSize: "24px",
            background: "#091235",
          },
        }}
        rootClassName="inline-filters-header"
        onClose={() => togglePriceDrawer(false)}
        open={isPriceDrawerVisible}
      >
        <Filters
          productsTotalSize={productsTotalSize}
          minPrice={minPrice}
          maxPrice={maxPrice}
          tempMinValue={tempMinValue}
          tempMaxValue={tempMaxValue}
          // colorsWithCounts={colorsWithCounts}
          selectedColors={selectedColors}
          handleColorChange={handleColorChange}
          setTempMinValue={setTempMinValue}
          setTempMaxValue={setTempMaxValue}
          handlePriceReset={handlePriceReset}
          availableCategories={availableCategories}
          selectedCategoryKeys={selectedCategoryKeys}
          selectCategory={selectCategory}
          backToAlreadySelectedCategory={backToAlreadySelectedCategory}
          selectedCategories={selectedCategories}
          categoryTitle={categoryTitle}
        />
      </Drawer>
    </>
  );
};

export default CatalogPage;
