/* eslint-disable react-hooks/rules-of-hooks */
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./CartPage.css";
import { Button, List, Spin } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Link, useNavigate } from "react-router-dom";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { initialFlowers } from "../../common/initialData";
import useCart from "../../hooks/useCart";
import useFavorites from "../../hooks/useFavorites";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const { toggleFavorite, favorites } = useFavorites();
  const nav = useNavigate();
  const width = useWindowWidth();

  const getColumnCount = () => (width < 768 ? 1 : 2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const savedItems = JSON.parse(localStorage.getItem("cart")) || [];
        const needItems = initialFlowers.filter((flower) =>
          savedItems.some((item) => item.id === flower.id),
        );

        const mappedItems = needItems.map((flower) => {
          const cartItem = savedItems.find((item) => item.id === flower.id);
          return { ...flower, quantity: cartItem ? cartItem.quantity : 1 };
        });

        setItems(mappedItems);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cart]);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const getActualData = () => {
    const cartData = items
      .map(
        (item) =>
          `${item.quantity} шт. ${item.title} - ${item.quantity * item.price}₸.`,
      )
      .join("%0A");
    const shareText = `Моя корзина:%0A${cartData}%0AОбщая сумма: ${totalPrice} ₸`;
    const shareUrl = `https://wa.me/77761156416?text=${shareText}`;
    window.open(shareUrl, "_blank");
  };

  const handleShare = () => {
    const shareData = {
      title: "Моя корзина",
      text: "Посмотрите мою корзину товаров!",
      url: window.location.href, // Текущий URL страницы корзины
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Успешно поделились!"))
        .catch((error) => console.log("Ошибка при шаринге:", error));
    } else {
      alert("Ваш браузер не поддерживает функцию шаринга");
    }
  };

  return (
    <Content style={{ padding: "0px 10px" }}>
      <h1 style={{ color: "#FEFBEA" }}>Корзина</h1>
      <Spin size="large" spinning={loading}>
        {items.length > 0 ? (
          <>
            <List
              grid={{ gutter: 16, column: getColumnCount() }}
              dataSource={items}
              renderItem={(item) => (
                <List.Item className="cart-item-wrapper">
                  <div className="cart-item">
                    <img
                      src={item.images[0]?.url}
                      alt={item.images[0]?.url || "Продукт"}
                      className="cart-item-image"
                    />
                    <div className="product-details">
                      <div className="product-info">
                        <Link className="product-title" to={`/${item.id}`}>
                          {item.title}
                        </Link>
                        <div className="product-category">
                          {item?.categoryRu || "Не указано"}
                        </div>
                        <div className="cart-item-price">{item.price} ₸</div>
                      </div>
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
                    </div>
                  </div>
                  <div className="cart-item-buttons">
                    <Button
                      style={{
                        color: "#FEFBEA",
                        border: "2px solid #FEFBEA",
                        background: "#091235",
                        height: "40px",
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
                      {item?.quantity}
                    </div>
                    <Button
                      style={{
                        color: "#FEFBEA",
                        border: "2px solid #FEFBEA",
                        background: "#091235",
                        height: "40px",
                        fontSize: 36,
                      }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </Button>
                    <div
                      style={{
                        fontSize: "24px",
                        color: "#FEFBEA",
                        fontWeight: 700,
                        justifySelf: "end",
                      }}
                    >
                       = {item.price * item.quantity} ₸
                    </div>
                  </div>
                </List.Item>
              )}
            />
            <div className="cart-summary">
              <h2 style={{ color: "#FEFBEA" }}>Общая сумма: {totalPrice} ₸</h2>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Button
                  icon={<ShoppingCartOutlined />}
                  type="primary"
                  size="large"
                  style={{ background: "#FEFBEA", color: "#091235" }}
                  onClick={getActualData}
                >
                  Узнать о наличии
                </Button>
                <Button
                  icon={<ShareAltOutlined />}
                  type="primary"
                  size="large"
                  style={{ background: "#FEFBEA", color: "#091235" }}
                  onClick={handleShare}
                >
                  Поделиться корзиной
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div style={{ fontSize: 24, color: "#FEFBEA" }}>Корзина пуста</div>
            <Button
              onClick={() => nav("/")}
              style={{
                color: "#091235",
                backgroundColor: "#FEFBEA",
                fontSize: 20,
              }}
              size="large"
            >
              К списку товаров
            </Button>
          </div>
        )}
      </Spin>
    </Content>
  );
};

export default CartPage;
