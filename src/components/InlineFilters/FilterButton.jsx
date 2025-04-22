import { Button } from "antd";
import { memo } from "react";

const FilterButton = memo(
  ({ keyName, param, filters, priceRange, onClick }) => {
    const getButtonStyle = (isActive) => ({
      borderRadius: "20px",
      backgroundColor: isActive ? "#4f4f4f" : "#f5f5f5",
      color: isActive ? "#f5f5f5" : "#4f4f4f",
      borderColor: isActive ? "#f5f5f5" : "#4f4f4f",
    });

    if (keyName === "price") {
      const isMinMaxPriceChanged = filters?.price
        ? filters.price[0] !== priceRange.min ||
          filters.price[1] !== priceRange.max
        : false;

      return (
        <Button
          onClick={() => onClick(keyName)}
          style={getButtonStyle(isMinMaxPriceChanged)}
        >
          {isMinMaxPriceChanged
            ? `Цена: ${filters.price?.[0]}₸ - ${filters.price?.[1]}₸`
            : "Цена"}
        </Button>
      );
    }

    const selectedValues = filters[keyName] || [];
    const selectedLabels = param?.options
      ?.filter((opt) => selectedValues.includes(opt.value))
      .map((opt) => opt.name);

    let buttonText = param.name;
    if (selectedLabels?.length === 1) {
      buttonText = selectedLabels[0];
    } else if (selectedLabels?.length > 1) {
      buttonText = `${selectedLabels[0]}, +${selectedLabels.length - 1}`;
    }

    return (
      <Button
        onClick={() => onClick(keyName)}
        style={getButtonStyle(selectedValues.length > 0)}
      >
        {buttonText}
      </Button>
    );
  },
);
export default FilterButton;
