import React, { createContext, useContext, useState } from "react";
import { Drawer } from "antd";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);

  const openDrawer = (newContent) => {
    setContent(newContent);
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
    setContent(null);
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      <Drawer
        placement="right"
        onClose={closeDrawer}
        open={isVisible}
        styles={{
          header: { color: "#4f4f4f", fontSize: "24px" },
          body: {
            color: "#4f4f4f",
            fontSize: "24px",
          },
        }}
        rootClassName="inline-filters-header"
      >
        {content}
      </Drawer>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
