import { Link } from "react-router-dom";
import { formatNumber } from "../../common/common";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const RelatedCarouselItem = ({ item }) => {
  return (
    <div className="related-carousel-item-content">
      <div className="related-carousel-item-image-wrapper">
        <img
          src={item.images[0].url}
          alt={item.images[0].url || "Продукт"}
          className="related-carousel-item-image"
        />
      </div>
      {/* <div className="related-carousel-item-details"> */}
      <div className="related-carousel-item-info">
        <Link className="related-carousel-item-title" to={`/items/${item.id}`}>
          {item.title}
        </Link>
        <div className="related-carousel-item-category">
          {item.categoryRu || "Не указано"}
        </div>
        <div className="related-carousel-item-price-wrapper">
          <div className="related-carousel-item-priceWithoutDiscount">
            {formatNumber(item.originalPrice)}₸
          </div>
          <div className="related-carousel-item-price">
            {formatNumber(item.price)}₸
          </div>
        </div>
      </div>
      {/* <div
          className="related-carousel-item-favorite"
          onClick={() => toggleFavorite(item.id)}
        >
          {favorites.includes(item.id) ? (
            <HeartFilled
              style={{ color: "red", fontSize: "24px" }}
            />
          ) : (
            <HeartOutlined style={{ fontSize: "24px" }} />
          )}
        </div> */}
      {/* </div> */}
      <Button
        icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
        style={{ width: "100%" }}
      >
        В корзину
      </Button>
    </div>
  );
};
export default RelatedCarouselItem;
