import { List, Skeleton } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import useFavorites from "../../hooks/useFavorites";
import { useEffect } from "react";
import { formatNumber } from "../../common/common";
import "./RelatedCarousel.css";

const RelatedCarousel = ({
  products,
  isLoading = true,
  setIsItemLoading,
  title,
  id,
}) => {
  const width = useWindowWidth();
  const { favorites, toggleFavorite } = useFavorites();

  const scrollToStart = () => {
    const listContainer = document.querySelector(".ant-list-items");
    if (listContainer) {
      listContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToStart();
  }, [id]);

  return (
    <div>
      <h2 className="related-carousel-title">{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {isLoading && (
          <List
            className="horizontal-scroll-container"
            dataSource={Array.from({ length: 12 }, (_, index) => index + 1)}
            renderItem={() => {
              return (
                <List.Item className="related-carousel-item">
                  <Skeleton active />
                </List.Item>
              );
            }}
          />
        )}
        {products.length > 0 && (
          <List
            grid={null}
            dataSource={products}
            className="horizontal-scroll-container"
            renderItem={(item) => {
              return (
                <List.Item className="related-carousel-item">
                  <div className="related-carousel-item-content">
                    <img
                      src={item.images[0].url}
                      alt={item.images[0].url || "Продукт"}
                      className="related-carousel-item-image"
                    />
                    <div className="related-carousel-item-details">
                      <div className="related-carousel-item-info">
                        <Link
                          className="related-carousel-item-title"
                          onClick={() => setIsItemLoading(true)}
                          to={`/${item.id}`}
                        >
                          {item.title}
                        </Link>
                        <div className="related-carousel-item-category">
                          {item.categoryRu || "Не указано"}
                        </div>
                        <div className="related-carousel-item-price">
                          {formatNumber(item.price)}₸
                        </div>
                      </div>
                      <div
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
                      </div>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RelatedCarousel;
