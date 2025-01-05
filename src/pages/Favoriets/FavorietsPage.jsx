import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./FavorietsPage.css";
import { List, Spin } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import mockProducts from "../../mockProducts";

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
    setLoading(true);
    const savedItems = localStorage.getItem("favorites");
    const parsedItems = JSON.parse(savedItems);
    const needItems = mockProducts.filter((product) =>
      parsedItems.includes(product.id)
    );
    setItems(needItems);
    setLoading(false);
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
                  src={item.previewImages[0]?.small}
                  alt={item.previewImages[0]?.small || "Продукт"}
                  className="product-image"
                />
                <div className="product-details">
                  <div className="product-info">
                    <Link className="product-title" to={`/${item.id}`}>
                      {item.title}
                    </Link>
                    <div className="product-category">
                      {item.category?.[item.category.length - 1] ||
                        "Не указано"}
                    </div>
                    <div className="product-price">
                      {item.priceFormatted || "Цена не указана"}
                    </div>
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
