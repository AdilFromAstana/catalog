import { Button } from "antd";
import { memo } from "react";
import { LeftOutlined } from "@ant-design/icons";

const BackButton = memo(({ onClick }) => (
  <Button
    type="primary"
    size="large"
    style={{
      color: "#FEFBEA",
      background: "transparent",
      borderColor: "transparent",
      boxShadow: "none",
      padding: 0,
    }}
    icon={<LeftOutlined />}
    onClick={onClick}
  >
    Назад
  </Button>
));

export default BackButton;
