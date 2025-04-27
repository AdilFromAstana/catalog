import React from "react";
import { Drawer, Menu } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  LineChartOutlined,
  ShoppingOutlined,
  PlusCircleOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined style={{ fontSize: "24px" }} />,
    label: "Главное",
    path: "/",
  },
  {
    key: "/items",
    icon: <ShoppingOutlined style={{ fontSize: "24px" }} />,
    label: "Все товары",
    path: "/items",
  },
  {
    key: "/favorites",
    icon: <HeartOutlined style={{ fontSize: "24px" }} />,
    label: "Избранное",
    path: "/favorites",
  },
  {
    key: "/cart",
    icon: <ShoppingCartOutlined style={{ fontSize: "24px" }} />,
    label: "Корзина",
    path: "/cart",
  },
  {
    key: "/statistics",
    icon: <LineChartOutlined style={{ fontSize: "24px" }} />,
    label: "Статистика",
    path: "/statistics",
  },
  {
    key: "/create",
    icon: <PlusCircleOutlined style={{ fontSize: "24px" }} />,
    label: "Создать",
    path: "/create",
  },
  {
    key: "/my-catalog",
    icon: <ShopOutlined style={{ fontSize: "24px" }} />,
    label: "Мой каталог",
    path: "/my-catalog",
  },
];

const MenuDrawer = ({ isDrawerVisible, setIsDrawerVisible }) => {
  const location = useLocation();

  const menuItemsFormatted = menuItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: (
      <Link
        to={item.path}
        onClick={() => {
          if (location.pathname !== item.path) setIsDrawerVisible(false);
        }}
        style={{
          display: "flex",
          fontSize: "16px",
          gap: 10,
        }}
      >
        {item.label}
      </Link>
    ),
  }));

  return (
    <Drawer
      styles={{
        header: {
          fontSize: "24px",
        },
        body: {
          padding: 0,
        },
      }}
      placement="right"
      title="Меню"
      onClose={() => setIsDrawerVisible(false)}
      open={isDrawerVisible}
      rootClassName="inline-filters-header"
    >
      <Menu
        mode="inline"
        style={{ height: "100%" }}
        selectedKeys={[location.pathname]}
        items={menuItemsFormatted}
      />
    </Drawer>
  );
};

export default MenuDrawer;
