import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { useState } from "react";
import MenuDrawer from "./components/MenuDrawer";

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const location = useLocation();

  // Проверяем, содержит ли путь "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Layout className={isAdminRoute ? "" : "layout"}>
      <Header setIsDrawerVisible={setIsDrawerVisible} />
      <AppRouter />
      <MenuDrawer
        isDrawerVisible={isDrawerVisible}
        setIsDrawerVisible={setIsDrawerVisible}
      />
    </Layout>
  );
};

// Обернем `App` в `BrowserRouter` в `index.js`
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
