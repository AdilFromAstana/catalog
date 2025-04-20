import { Button } from "antd";
import { memo } from "react";

const CartControls = memo(({ cartItem, onAdd, onRemove, onNavigateToCart }) => {
  if (!cartItem) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40px 40px 40px 1fr",
        gap: 10,
      }}
    >
      <Button
        style={{
          color: "#FEFBEA",
          border: "2px solid #FEFBEA",
          background: "#091235",
          height: "40px",
          fontSize: 36,
          opacity: cartItem.quantity === 5 ? 0.5 : 1,
        }}
        disabled={cartItem.quantity === 5}
        onClick={onAdd}
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
          height: "40px",
          fontSize: 36,
        }}
        onClick={onRemove}
      >
        -
      </Button>
      <Button
        type="primary"
        size="large"
        style={{
          color: "#FEFBEA",
          border: "2px solid #FEFBEA",
          background: "#091235",
        }}
        onClick={onNavigateToCart}
      >
        В корзину
      </Button>
    </div>
  );
});

export default CartControls;
