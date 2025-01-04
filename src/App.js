import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Drawer, Layout } from "antd";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header setIsDrawerVisible={setIsDrawerVisible} />
        <AppRouter />
        <Drawer
          placement="right"
          title="Меню"
          onClose={() => setIsDrawerVisible(false)}
          open={isDrawerVisible}
        >
          АГА
        </Drawer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
