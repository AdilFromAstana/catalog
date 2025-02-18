/* eslint-disable react-hooks/rules-of-hooks */
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./FavorietsPage.css";
import { List, Spin } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useGetDataByIds } from "../../firestoreService";

const FavorietsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const width = useWindowWidth();

  const getColumnCount = () => {
    if (width < 448) {
      return 1;
    } else if (width < 768) {
      return 2;
    } else {
      return 3;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const savedItems = localStorage.getItem("favorites");
        const parsedItems = JSON.parse(savedItems) || [];
        const { data: needItems } = useGetDataByIds({
          ids: parsedItems,
          collectionName: "items",
          storeCode: "cool-store",
        });
        setItems(needItems);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Content className="content">
      <h1>Избранное</h1>
      <Spin size="large" spinning={loading}>
        {items.length > 0 ? (
          <List
            grid={{
              gutter: 16,
              column: getColumnCount(),
            }}
            dataSource={items}
            renderItem={(item) => (
              <List.Item className="list-item">
                <img
                  src={item.images[0]?.url}
                  alt={item.images[0]?.url || "Продукт"}
                  className="product-image"
                />
                <div className="product-details">
                  <div className="product-info">
                    <Link className="product-title" to={`/${item.id}`}>
                      {item.title}
                    </Link>
                    <div className="product-category">
                      {item?.categoryRu || "Не указано"}
                    </div>
                    <div className="product-price">{item.price || 0} ₸</div>
                  </div>
                  <div
                    className="product-favorite"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites.includes(item.id) ? (
                      <HeartFilled style={{ color: "red", fontSize: "24px" }} />
                    ) : (
                      <HeartOutlined style={{ fontSize: "24px" }} />
                    )}
                  </div>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            Нет доступных продуктов
          </div>
        )}
      </Spin>
    </Content>
  );
};

export default FavorietsPage;
