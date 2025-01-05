import { Button, List, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

const ProductList = ({
  products,
  favorites,
  toggleFavorite,
  handleSortChange,
  sortOrder,
  currentPage,
  handlePageChange,
  itemsPerPage,
  totalProducts,
}) => {
  const width = useWindowWidth();

  const getColumnCount = () => {
    if (width < 448) {
      return 1;
    } else if (width < 768) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="sort-buttons">
        {[
          { value: "asc", label: "Сначала дешевые" },
          { value: "desc", label: "Сначала дорогие" },
          { value: "newest", label: "Новинки" },
          { value: "oldest", label: "Старые" },
        ].map((option) => (
          <Button
            key={option.value}
            type={sortOrder === option.value ? "primary" : "default"}
            onClick={() => handleSortChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {products.length > 0 ? (
        <List
          grid={{
            gutter: 16,
            column: getColumnCount(),
          }}
          dataSource={products}
          renderItem={(item) => (
            <List.Item className="list-item">
              <img
                src={item.previewImages[0]?.small}
                alt={item.previewImages[0]?.small || "Продукт"}
                className="product-image"
              />
              <div className="product-details">
                <div className="product-info">
                  <Link className="product-title" to={`/${item.id}`}>
                    {item.title}
                  </Link>
                  <div className="product-category">
                    {item.category?.[item.category.length - 1] || "Не указано"}
                  </div>
                  <div className="product-price">
                    {item.priceFormatted || "Цена не указана"}
                  </div>
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
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          Нет доступных продуктов
        </div>
      )}

      {totalProducts > itemsPerPage && (
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalProducts}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductList;
