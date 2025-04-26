import { forwardRef, useState } from "react";
import InlineFilters from "./InlineFilters/InlineFilters";
import CatalogToolbar from "./CatalogToolbar/CatalogToolbar";
import { useSelector } from "react-redux";
import "./CatalogHeader.css";

const CatalogHeader = forwardRef((props, ref) => {
  const priceRange = useSelector(
    (state) =>
      state.filters.filteredOptions?.price?.range || { min: 0, max: 0 },
  );

  const [isSortDrawerVisible, setIsSortDrawerVisible] = useState(false);
  const [isPriceDrawerVisible, setIsPriceDrawerVisible] = useState(false);
  const [productsTotalSize, setProductsTotalSize] = useState(1);
  const [tempFilters, setTempFilters] = useState({});
  const [tempPrice, setTempPrice] = useState([priceRange.min, priceRange.max]);

  const toggleSortDrawer = (open) => {
    setIsSortDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const togglePriceDrawer = (open) => {
    setIsPriceDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="catalog-header-container" ref={ref}>
      <CatalogToolbar
        tempFilters={tempFilters}
        isSortDrawerVisible={isSortDrawerVisible}
        isPriceDrawerVisible={isPriceDrawerVisible}
        productsTotalSize={productsTotalSize}
        toggleSortDrawer={toggleSortDrawer}
        togglePriceDrawer={togglePriceDrawer}
      />
      <InlineFilters
        setTempFilters={setTempFilters}
        tempPrice={tempPrice}
        setTempPrice={setTempPrice}
        tempFilters={tempFilters}
        priceRange={priceRange}
      />
    </div>
  );
});

export default CatalogHeader;
