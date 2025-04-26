import { Slider, Checkbox, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setPriceRange, updateFilter } from "../../../../redux/filterSlice";
import "./CatalogDesktopFilters.css";

const CatalogDesktopFilters = () => {
  const dispatch = useDispatch();
  const filteredOptions = useSelector((state) => state.filters.filteredOptions);
  const priceRange = filteredOptions?.price?.range || { min: 0, max: 0 };
  const filters = useSelector((state) => state.filters.filters);

  const handlePriceChange = (value) =>
    dispatch(setPriceRange({ min: value[0], max: value[1] }));

  const handleOptionToggle = (param, value) => {
    const current = filters[param] || [];
    const newValues = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    dispatch(updateFilter({ param, values: newValues }));
  };

  return (
    <div className="desktop-filters">
      <div className="desktop-filters__section">
        <div className="desktop-filters__title">Цена, ₸</div>
        <Slider
          range
          min={priceRange.min}
          max={priceRange.max}
          defaultValue={[priceRange.min, priceRange.max]}
          onChangeComplete={handlePriceChange}
        />
        <div className="desktop-filters__price-inputs">
          <Input size="large" value={priceRange.min} readOnly />
          <Input size="large" value={priceRange.max} readOnly />
        </div>
      </div>

      {Object.entries(filteredOptions)
        .filter(([key]) => key !== "price")
        .map(([key, filter]) => (
          <div key={key} className="desktop-filters__section">
            <div className="desktop-filters__title">{filter.name}</div>
            <div className="desktop-filters__options">
              {filter.options?.map((option) => (
                <Checkbox
                  key={option.value}
                  checked={filters[key]?.includes(option.value)}
                  onChange={() => handleOptionToggle(key, option.value)}
                >
                  {option.name} ({option.count})
                </Checkbox>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CatalogDesktopFilters;
