import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { useState } from "react";
import MenuDrawer from "./components/MenuDrawer";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header setIsDrawerVisible={setIsDrawerVisible} />
        <AppRouter />
        <MenuDrawer
          isDrawerVisible={isDrawerVisible}
          setIsDrawerVisible={setIsDrawerVisible}
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
