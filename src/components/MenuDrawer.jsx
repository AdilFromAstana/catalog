import React from "react";
import { Drawer, Menu } from "antd";
import {
  PhoneOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  HomeOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { key: "/", icon: <HomeOutlined style={{ fontSize: "24px" }} />, label: "Главное", path: "/" },
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
    key: "/my-products",
    icon: <ShoppingCartOutlined style={{ fontSize: "24px" }} />,
    label: "Корзина",
    path: "/my-products",
  },
];

const MenuDrawer = ({ isDrawerVisible, setIsDrawerVisible }) => {
  const location = useLocation();

  return (
    <Drawer
      styles={{
        header: { backgroundColor: "#091235", color: "#FEFBEA", fontSize: "24px" },
        body: {
          color: "#FEFBEA",
          padding: 0,
          background: "#091235"
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
        style={{ height: "100%", background: "#091235" }}
        selectedKeys={[location.pathname]}
      >
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            style={{
              color: "#FEFBEA",
              backgroundColor: location.pathname === item.path ? "#FEFBEA" : "#091235",
              color: location.pathname === item.path ? "#091235" : "#FEFBEA",
            }}
          >
            <Link
              to={item.path}
              onClick={() => {
                if (location.pathname !== item.path) {
                  setIsDrawerVisible(false);
                }
              }}
              style={{
                display: "flex",
                fontSize: "16px",
                gap: 10
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
};

export default MenuDrawer;
