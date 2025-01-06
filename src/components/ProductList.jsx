import { Button, List, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

const ProductList = ({
  products,
  favorites,
  toggleFavorite,
  handleSortChange,
  sort,
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
          {
            value: "priceasc",
            by: "price",
            order: "asc",
            label: "Сначала дешевые",
          },
          {
            value: "pricedesc",
            by: "price",
            order: "desc",
            label: "Сначала дорогие",
          },
          {
            value: "createAtasc",
            by: "createAt",
            order: "asc",
            label: "Новинки",
          },
          {
            value: "createAtdesc",
            by: "createAt",
            order: "desc",
            label: "Старые",
          },
        ].map((option) => (
          <Button
            key={option.value}
            type={sort.value === option.value ? "primary" : "default"}
            onClick={() => handleSortChange(option)}
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
          renderItem={(item) => {
            return (
              <List.Item className="list-item">
                <img
                  src={item.images[0]}
                  alt={item.images[0] || "Продукт"}
                  className="product-image"
                />
                <div className="product-details">
                  <div className="product-info">
                    <Link className="product-title" to={`/${item.id}`}>
                      {item.title}
                    </Link>
                    <div className="product-category">
                      {item.categoryRu || "Не указано"}
                    </div>
                    <div className="product-price">
                      {item.price || "Цена не указана"}
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
            );
          }}
        />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          Нет доступных продуктов
        </div>
      )}
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={totalProducts}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
