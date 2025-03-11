import React from "react";
import { Drawer, Slider, Button } from "antd";

const PriceFilterDrawer = ({ open, onClose, applyFilter }) => {
  return (
    <Drawer
      title="Цена"
      placement="bottom"
      onClose={onClose}
      open={open}
      height="40svh"
      styles={{
        header: {
          backgroundColor: "#091235",
          color: "#FEFBEA",
          fontSize: "24px",
        },
        body: { backgroundColor: "#091235", padding: "20px" },
      }}
    >
      <Slider range />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FEFBEA",
        }}
      >
        <span>0₸</span>
        <span>100000₸</span>
      </div>
      <Button
        size="large"
        onClick={applyFilter}
        type="primary"
        style={{ width: "100%", marginTop: "20px" }}
      >
        Применить
      </Button>
    </Drawer>
  );
};

export default PriceFilterDrawer;
