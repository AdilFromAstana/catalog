/* eslint-disable react-hooks/rules-of-hooks */
import { Button, List, message, Segmented, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetData } from "../../firestoreService";
import "./MyCatalogPage.css";
import { Content } from "antd/es/layout/layout";
import { PlusOutlined } from "@ant-design/icons";

const statusTitleObj = {
  archive: "В архиве",
  active: "Активный",
  archiveBtn: "В архив",
  activeBtn: "Активировать",
};

const MyCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const updateItem = (id) => nav(id);

  const getStatusCounts = () => {
    const statusCounts = {};

    products.forEach((item) => {
      if (item.status) {
        statusCounts[item.status] = (statusCounts[item.status] || 0) + 1;
      }
    });

    return Object.entries(statusCounts).map(([status, count]) => ({
      label: `${statusTitleObj[status]} ${count}`,
      value: status,
      key: status,
      status,
      count,
    }));
  };

  const getCatalog = async () => {
    try {
      setIsLoading(true);
      const { data } = useGetData({
        collectionName: "items",
        storeCode: "cool-store",
      });
      setProducts(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toUpdateStatus = async ({ id, status }) => {
    try {
      setIsButtonsDisabled(true);
      // await itemToArchive({ collectionName: "items", id, status });
      message.success("Статус успешно обновлен!");
      getCatalog();
    } catch (error) {
      message.error("Ошибка при обновлении товара!");
      console.error(error);
    } finally {
      setIsButtonsDisabled(false);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      const initialTab = getStatusCounts()[0]?.value || null;
      setActiveTab(initialTab);
    }
  }, [products]);

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <Content className="content">
      <Spin spinning={isLoading}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Мои товары</h1>
          <Button
            style={{
              background: "#1677ff",
              borderColor: "#1677ff",
              height: 36,
              width: 36,
            }}
            onClick={() => nav("/create")}
          >
            <PlusOutlined style={{ fontSize: "24px", color: "white" }} />
          </Button>
        </div>
        <Segmented
          value={activeTab}
          onChange={setActiveTab}
          options={getStatusCounts()}
          style={{ marginBottom: "10px", width: "100%" }}
        />
        <List
          grid={{
            gutter: 16,
            column: 1,
          }}
          dataSource={
            activeTab
              ? products.filter((product) => product.status === activeTab)
              : products
          }
          renderItem={(item) => {
            const nextStatusCode =
              item.status === "archive" ? "active" : "archive";
            const btnColor = item.status === "archive" ? "green" : "red";
            const nextStatusTitle =
              item.status === "archive" ? "activeBtn" : "archiveBtn";
            return (
              <List.Item className="my-catalog-item-wrapper">
                <div className="my-catalog-item">
                  <img
                    src={item.images[0].url}
                    alt={item.images[0].url || "Продукт"}
                    className="my-catalog-item-image"
                  />
                  <div className="my-catalog-item-details">
                    <div className="my-catalog-item-info">
                      <div className="my-catalog-item-title">{item.title}</div>
                      <div className="my-catalog-item-category">
                        {item.categoryRu || "Не указано"}
                      </div>
                      <div className="my-catalog-item-price">
                        {item.price || "Цена не указана"}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%", gap: "10px" }}>
                  <Button
                    style={{ width: "100%" }}
                    onClick={() => updateItem(item.id)}
                    loading={isButtonsDisabled}
                  >
                    Редактировать
                  </Button>
                  <Button
                    style={{ width: "100%", background: btnColor }}
                    type="primary"
                    danger
                    onClick={() => {
                      toUpdateStatus({ id: item.id, status: nextStatusCode });
                    }}
                    loading={isButtonsDisabled}
                  >
                    {statusTitleObj[nextStatusTitle]}
                  </Button>
                </div>
              </List.Item>
            );
          }}
        />
      </Spin>
    </Content>
  );
};
export default MyCatalog;
