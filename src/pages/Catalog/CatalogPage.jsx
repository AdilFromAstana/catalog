import React, { useEffect, useRef, useState } from "react";
import ProductList from "./Components/ProductList/ProductList";
import useFavorites from "../../hooks/useFavorites";
import useCategory from "../../hooks/useCategory";
import CatalogHeader from "./Components/CatalogHeader/CatalogHeader";
import { Spin } from "antd";
import "./CatalogPage.css";
import CatalogDesktopFilters from "./Components/CatalogDesktopFilters/CatalogDesktopFilters";

const CatalogPage = () => {
  const [categoryFiltersContainerPadding, setCategoryFiltersContainerPadding] =
    useState(0);
  const ref = useRef(null);
  const { isCategoryLoading } = useCategory();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (ref.current) {
      setCategoryFiltersContainerPadding(
        ref.current.getBoundingClientRect().height,
      );
    }
  }, [ref]);

  return (
    <Spin spinning={isCategoryLoading} wrapperClassName="catalog-page-wrapper">
      <CatalogHeader ref={ref} />
      <div
        className="catalog-page-container"
        style={{ marginTop: `${categoryFiltersContainerPadding}px` }}
      >
        <CatalogDesktopFilters />
        <ProductList favorites={favorites} toggleFavorite={toggleFavorite} />
      </div>
    </Spin>
  );
};

export default CatalogPage;
