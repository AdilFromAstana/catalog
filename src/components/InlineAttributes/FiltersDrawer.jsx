import React from "react";
import { Drawer, Button } from "antd";
import FiltersList from "./FiltersList";

const FiltersDrawer = ({
  attributes,
  activeFilter,
  visible,
  tempFilters,
  onClose,
  onSelectItem,
  resetFilter,
  applyFilter,
}) => {
  const attribute = attributes?.find((attr) => attr.code === activeFilter);

  return (
    <Drawer
      title={attribute?.titleRu || ""}
      placement="bottom"
      onClose={onClose}
      open={visible}
      height="90svh"
      styles={{
        header: {
          backgroundColor: "#091235",
          color: "#FEFBEA",
          fontSize: "24px",
        },
        body: {
          backgroundColor: "#091235",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingTop: 12,
        },
      }}
      rootClassName="inline-filters-header"
    >
      {activeFilter && (
        <div style={{ flex: 1, overflowY: "auto", marginTop: 10 }}>
          <FiltersList
            options={attribute?.options || []}
            activeFilter={activeFilter}
            tempFilters={tempFilters}
            onSelectItem={onSelectItem}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          paddingTop: "20px",
          borderTop: "2px solid black",
        }}
      >
        <Button
          size="large"
          onClick={resetFilter}
          type="default"
          style={{ width: "100%" }}
        >
          Сбросить
        </Button>
        <Button
          size="large"
          onClick={applyFilter}
          type="primary"
          style={{ width: "100%" }}
        >
          Применить
        </Button>
      </div>
    </Drawer>
  );
};

export default FiltersDrawer;
