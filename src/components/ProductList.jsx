import { Button, List, Result } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth";
import { formatNumber } from "../common/common";
import useCart from "../hooks/useCart";

const ProductList = ({ favorites, toggleFavorite, handleSortChange, sort }) => {
  const width = useWindowWidth();
  const nav = useNavigate();
  const filteredProducts = useSelector(
    (state) => state.filters.filteredProducts,
  );
  const { addToCart, removeFromCart, cart } = useCart();

  const getColumnCount = () => (width < 768 ? 1 : 2);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="sort-buttons">
        {[
          {
            value: "priceasc",
            by: "price",
            order: "asc",
            label: "Сначала дешевые",
          },
          {
            value: "pricedesc",
            by: "price",
            order: "desc",
            label: "Сначала дорогие",
          },
          {
            value: "createAtasc",
            by: "createAt",
            order: "asc",
            label: "Новинки",
          },
          {
            value: "createAtdesc",
            by: "createAt",
            order: "desc",
            label: "Старые",
          },
        ].map((option) => (
          <Button
            key={option.value}
            type={sort.value === option.value ? "primary" : "default"}
            onClick={() => handleSortChange(option)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <List
          grid={{ gutter: 16, column: getColumnCount() }}
          dataSource={filteredProducts}
          renderItem={(item) => {
            const cartItem = cart?.find(
              (cartItem) => item?.id === cartItem?.id,
            );
            return (
              <List.Item className="list-item">
                <img
                  src="https://recommerce.gumlet.io/arktiktc.reshop.kz/modules/4993606076286fcbee10c3?enlarge=true&mode=fit&width=1440&format=auto"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    height: "36px",
                    width: "36px",
                  }}
                />
                <img
                  src={item?.images[0]?.url}
                  alt={item?.title}
                  className="product-image"
                  onClick={() => nav(`/${item.id}`)}
                />
                <div className="product-details">
                  <div className="product-info">
                    <Link className="product-title" to={`/${item.id}`}>
                      {item.title}
                    </Link>
                    <div className="product-category">
                      {item.categoryRu || "Не указано"}
                    </div>
                    <div className="product-price">
                      {formatNumber(item.price || 0)} ₸
                    </div>
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
                          onClick={() => addToCart(item.id)}
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
        <Result
          status="404"
          title="Товары не найдены"
          subTitle="Извините, по вашим фильтрам товаров не нашлось"
          extra={<Button type="primary">Сбросить</Button>}
        />
      )}
    </div>
  );
};

export default ProductList;
