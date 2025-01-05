import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Button, Layout, message, Upload } from "antd";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useEffect, useState } from "react";
import MenuDrawer from "./components/MenuDrawer";
import { addData, getData, uploadFile } from "./firestoreService";
import { UploadOutlined } from "@ant-design/icons";

const App = () => {
  const [loading, setLoading] = useState(false); // Для управления состоянием загрузки
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getData("items"); // Коллекция "items"
      console.log("data: ", data);
    };
    fetchItems();
  }, []);

  const handleUpload = async (file) => {
    setLoading(true);
    try {
      const fileURL = await uploadFile(file);

      const data = {
        name: file.name,
        fileURL,
        createdAt: new Date(),
      };

      await addData("items", data); // Сохраняем данные в коллекции "items"
      message.success("Файл успешно загружен и данные сохранены!");
    } catch (error) {
      message.error("Ошибка при загрузке файла.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      handleUpload(file);
      return false; // Отключает автоматическую загрузку Ant Design
    },
    multiple: false,
  };

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header setIsDrawerVisible={setIsDrawerVisible} />
        <AppRouter />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} loading={loading}>
              Загрузить файл
            </Button>
          </Upload>
        </div>
        <MenuDrawer
          isDrawerVisible={isDrawerVisible}
          setIsDrawerVisible={setIsDrawerVisible}
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
