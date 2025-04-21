import { MenuOutlined } from "@ant-design/icons";
import { Header as AntHeader } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const Header = ({ setIsDrawerVisible }) => {
  return (
    <AntHeader className="header">
      <Link className="header-title" to="/">
        <img src="logo512.png" alt="logo512" />
      </Link>
      <MenuOutlined className="icon" onClick={() => setIsDrawerVisible(true)} />
    </AntHeader>
  );
};

export default Header;
