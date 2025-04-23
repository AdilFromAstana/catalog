import { Button } from "antd";
import { memo } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

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
          height: "36px",
          width: "36px",
          opacity: cartItem.quantity === 5 ? 0.5 : 1,
        }}
        disabled={cartItem.quantity === 5}
        onClick={onAdd}
        icon={<PlusOutlined />}
      />
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
          height: "36px",
          width: "36px",
        }}
        onClick={onRemove}
        icon={<MinusOutlined />}
      />
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
