import { List } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

const ProductList = ({ products, favorites, toggleFavorite }) => {
  const width = useWindowWidth();
  console.log("width: ", width);
  return (
    <List
      grid={{
        column: width > 429 ? 2 : 1,
      }}
      dataSource={products}
      renderItem={(item) => (
        <List.Item className="list-item">
          <img
            src={item.previewImages[0].small}
            alt={item.previewImages[0].small}
            className="product-image"
          />
          <div className="product-details">
            <div className="product-info">
              <Link className="product-title" to={`/${item.id}`}>
                {item.title}
              </Link>
              <div className="product-category">
                {item.category[item.category.length - 1]}
              </div>
              <div className="product-price">{item.priceFormatted}</div>
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
  );
};

export default ProductList;
