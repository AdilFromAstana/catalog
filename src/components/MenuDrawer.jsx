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
  { key: "/", icon: <HomeOutlined />, label: "Главное", path: "/" },
  {
    key: "/favorites",
    icon: <HeartOutlined />,
    label: "Избранное",
    path: "/favorites",
  },
  {
    key: "/my-catalog",
    icon: <ShopOutlined />,
    label: "Мои товары",
    path: "/my-catalog",
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "Профиль",
    path: "/profile",
  },
  {
    key: "/cart",
    icon: <ShoppingCartOutlined />,
    label: "Корзина",
    path: "/cart",
  },
  {
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Настройки",
    path: "/settings",
  },
  {
    key: "/about",
    icon: <InfoCircleOutlined />,
    label: "О компании",
    path: "/about",
  },
  {
    key: "/contacts",
    icon: <PhoneOutlined />,
    label: "Контакты",
    path: "/contacts",
  },
];

const MenuDrawer = ({ isDrawerVisible, setIsDrawerVisible }) => {
  const location = useLocation();

  return (
    <Drawer
      styles={{
        body: {
          padding: 0,
        },
      }}
      placement="right"
      title="Меню"
      onClose={() => setIsDrawerVisible(false)}
      open={isDrawerVisible}
    >
      <Menu
        mode="inline"
        style={{ height: "100%" }}
        selectedKeys={[location.pathname]}
      >
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={{
              backgroundColor: location.pathname === item.path && "black",
              color: location.pathname === item.path && "white",
            }}
          >
            <Link
              to={item.path}
              onClick={() => {
                if (location.pathname !== item.path) {
                  setIsDrawerVisible(false);
                }
              }}
            >
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
};

export default MenuDrawer;
