import React from "react";
import { Button } from "antd";

const FilterButton = ({ attribute, selectedValues, showDrawer }) => {
  if (attribute.code === "price") return null; // Пропускаем price

  const selectedLabels = selectedValues.map(
    (value) => attribute.options.find((opt) => opt.value === value)?.value,
  );

  let buttonText = attribute.titleRu;
  if (selectedLabels.length === 1) {
    buttonText = selectedLabels[0];
  } else if (selectedLabels.length > 1) {
    buttonText = `${selectedLabels[0]}, +${selectedLabels.length - 1}`;
  }

  return (
    <Button
      key={attribute.code}
      onClick={() => showDrawer(attribute.code)}
      style={{
        borderRadius: "20px",
        backgroundColor: selectedValues.length ? "#091235" : "#FEFBEA",
        color: selectedValues.length ? "#FEFBEA" : "#091235",
        borderColor: selectedValues.length ? "#FEFBEA" : "#091235",
      }}
    >
      {buttonText}
    </Button>
  );
};

export default FilterButton;
