/* eslint-disable react-hooks/rules-of-hooks */
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./FavorietsPage.css";
import { Button, List, Spin } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { initialFlowers } from "../../common/initialData";
import useCart from "../../hooks/useCart";

const FavorietsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart, removeFromCart, cart } = useCart();
  const width = useWindowWidth();

  const getColumnCount = () => (width < 768 ? 1 : 2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const savedItems = localStorage.getItem("favorites");
        const parsedItems = JSON.parse(savedItems) || [];
        const needItems = initialFlowers.filter((flower) =>
          parsedItems.includes(flower.id),
        );
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
    <Content style={{ padding: "0px 10px" }}>
      <h1
        style={{
          color: "#FEFBEA",
        }}
      >
        Избранное
      </h1>
      <Spin size="large" spinning={loading}>
        {items.length > 0 ? (
          <List
            grid={{
              gutter: 16,
              column: getColumnCount(),
            }}
            dataSource={items}
            renderItem={(item) => {
              const cartItem = cart?.find(
                (cartItem) => item?.id === cartItem?.id,
              );
              return (
                <List.Item className="list-item">
                  <img
                    src={item.images[0]?.url}
                    alt={item.images[0]?.url || "Продукт"}
                    className="product-image"
                  />
                  <div className="product-details">
                    <div className="product-info">
                      <Link className="product-title" to={`/items/${item.id}`}>
                        {item.title}
                      </Link>
                      <div className="product-category">
                        {item?.categoryRu || "Не указано"}
                      </div>
                      <div className="product-price">{item.price || 0} ₸</div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <div
                        className="product-favorite"
                        onClick={() => toggleFavorite(item.id)}
                      >
                        {favorites.includes(item.id) ? (
                          <HeartFilled
                            style={{ color: "red", fontSize: "24px" }}
                          />
                        ) : (
                          <HeartOutlined
                            style={{ color: "#FEFBEA", fontSize: "24px" }}
                          />
                        )}
                      </div>
                      <div style={{ position: "absolute", bottom: 0 }}>
                        {cartItem ? (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "36px 36px 36px",
                            }}
                          >
                            <Button
                              style={{
                                color: "#FEFBEA",
                                border: "2px solid #FEFBEA",
                                background: "#091235",
                                height: "36px",
                                fontSize: 36,
                                opacity: item.quantity === 5 ? 0.5 : 1,
                              }}
                              disabled={item.quantity === 5}
                              onClick={() => addToCart(item.id)}
                            >
                              +
                            </Button>
                            <div
                              style={{
                                fontSize: "20px",
                                color: "#FEFBEA",
                                margin: "auto",
                              }}
                            >
                              {cartItem?.quantity}
                            </div>
                            <Button
                              style={{
                                color: "#FEFBEA",
                                border: "2px solid #FEFBEA",
                                background: "#091235",
                                height: "36px",
                                fontSize: 36,
                              }}
                              onClick={() => removeFromCart(item.id)}
                            >
                              -
                            </Button>
                          </div>
                        ) : (
                          <Button
                            style={{
                              background: "#FEFBEA",
                            }}
                          >
                            <ShoppingCartOutlined
                              style={{ color: "#091235", fontSize: "24px" }}
                            />
                            <div style={{ color: "#091235" }}>В корзину</div>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        ) : (
          <div style={{ textAlign: "center", padding: "20px", color: "#FEFBEA" }}>
            Нет доступных продуктов
          </div>
        )}
      </Spin>
    </Content>
  );
};

export default FavorietsPage;
