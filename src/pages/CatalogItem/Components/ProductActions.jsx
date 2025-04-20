import { memo } from "react";
import CartControls from "./CartControls";
import { Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const ProductActions = memo(
  ({
    cartItem,
    isFavorite,
    onAddToCart,
    onToggleFavorite,
    onNavigateToCart,
    onRemoveFromCart,
    whatsappUrl,
  }) => (
    <div
      className="buttons"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: cartItem ? "1fr" : "1fr 40px",
          gap: 10,
        }}
      >
        {cartItem ? (
          <CartControls
            cartItem={cartItem}
            onAdd={onAddToCart}
            onRemove={onRemoveFromCart}
            onNavigateToCart={onNavigateToCart}
          />
        ) : (
          <>
            <Button
              type="primary"
              size="large"
              style={{
                color: "#FEFBEA",
                border: "2px solid #FEFBEA",
                background: "#091235",
              }}
              onClick={onAddToCart}
            >
              Добавить в корзину
            </Button>
            <Button
              type="primary"
              size="large"
              style={{
                color: "#FEFBEA",
                border: "2px solid #FEFBEA",
                background: "#091235",
              }}
              onClick={onToggleFavorite}
            >
              {isFavorite ? (
                <HeartFilled style={{ color: "red", fontSize: "24px" }} />
              ) : (
                <HeartOutlined style={{ color: "#FEFBEA", fontSize: "24px" }} />
              )}
            </Button>
          </>
        )}
      </div>
      <Button
        onClick={() => window.open(whatsappUrl, "_blank")}
        className="add-to-cart"
        type="primary"
        size="large"
        style={{ color: "#091235" }}
      >
        Узнать наличие товара
      </Button>
    </div>
  ),
);
export default ProductActions;
