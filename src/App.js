import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useState } from "react";
import MenuDrawer from "./components/MenuDrawer";
const { Footer } = Layout;

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
