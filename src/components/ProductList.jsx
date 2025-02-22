import { Button, List, Pagination, Result, Skeleton } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import { memo } from "react";
import { formatNumber } from "../common/common";

const ProductList = memo(
  ({
    products,
    favorites,
    toggleFavorite,
    handleSortChange,
    sort,
    currentPage,
    handlePageChange,
    itemsPerPage,
    totalProducts,
    isLoading = true,
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

        {isLoading && (
          <List
            grid={{
              gutter: 16,
              column: getColumnCount(),
            }}
            dataSource={[1, 2, 3, 4, 5, 6]}
            renderItem={() => {
              return (
                <List.Item className="list-item">
                  <Skeleton active />
                </List.Item>
              );
            }}
          />
        )}

        {products.length > 0 && (
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
                    src={item?.images[0]?.url}
                    alt={item?.images[0]?.url || "Продукт"}
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
                        {formatNumber(item.price || 0)} ₸
                      </div>
                    </div>
                    <div
                      className="product-favorite"
                      onClick={() => toggleFavorite(item.id)}
                    >
                      {favorites.includes(item.id) ? (
                        <HeartFilled
                          style={{ color: "red", fontSize: "24px" }}
                        />
                      ) : (
                        <HeartOutlined
                          style={{ color: "#FEFBEA", fontSize: "24px" }}
                        />
                      )}
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        )}

        {products.length === 0 && !isLoading && (
          <Result
            status="404"
            title="Товары не найдены"
            subTitle="Извините, по вашим фильтрам товаров не нашлось"
            extra={<Button type="primary">Сбросить</Button>}
          />
        )}

        {totalProducts > 0 && (
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={totalProducts}
            onChange={handlePageChange}
          />
        )}
      </div>
    );
  }
);

export default ProductList;
