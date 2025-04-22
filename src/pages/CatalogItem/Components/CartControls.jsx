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
          color: "#4f4f4f",
          border: "1px solid #4f4f4f",
          background: "#f5f5f5",
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
          color: "#4f4f4f",
          margin: "auto",
        }}
      >
        {cartItem?.quantity}
      </div>
      <Button
        style={{
          color: "#4f4f4f",
          border: "1px solid #4f4f4f",
          background: "#f5f5f5",
          height: "40px",
          fontSize: 36,
        }}
        onClick={onRemove}
      >
        -
      </Button>
      <Button
        style={{
          background: "#f5f5f5",
          borderColor: "#4f4f4f",
          color: "#4f4f4f",
        }}
        type="primary"
        size="large"
        onClick={onNavigateToCart}
      >
        В корзину
      </Button>
    </div>
  );
});

export default CartControls;
