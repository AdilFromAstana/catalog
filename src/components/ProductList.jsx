import { Button, List, Result } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth";
import { formatNumber } from "../common/common";

const ProductList = ({ favorites, toggleFavorite, handleSortChange, sort }) => {
  const width = useWindowWidth();
  const filteredFlowers = useSelector((state) => state.filters.filteredFlowers);

  console.log("🔍 ProductList: filteredFlowers =>", filteredFlowers);

  const getColumnCount = () => (width < 448 ? 1 : width < 768 ? 2 : 3);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="sort-buttons">
        {[
          { value: "priceasc", by: "price", order: "asc", label: "Сначала дешевые" },
          { value: "pricedesc", by: "price", order: "desc", label: "Сначала дорогие" },
          { value: "createAtasc", by: "createAt", order: "asc", label: "Новинки" },
          { value: "createAtdesc", by: "createAt", order: "desc", label: "Старые" },
        ].map((option) => (
          <Button key={option.value} type={sort.value === option.value ? "primary" : "default"} onClick={() => handleSortChange(option)}>
            {option.label}
          </Button>
        ))}
      </div>

      {filteredFlowers.length > 0 ? (
        <List
          grid={{ gutter: 16, column: getColumnCount() }}
          dataSource={filteredFlowers}
          renderItem={(item) => (
            <List.Item className="list-item">
              <img src={item?.images[0]?.url} alt={item?.title} className="product-image" />
              <div className="product-details">
                <div className="product-info">
                  <Link className="product-title" to={`/${item.id}`}>
                    {item.title}
                  </Link>
                  <div className="product-category">{item.categoryRu || "Не указано"}</div>
                  <div className="product-price">{formatNumber(item.price || 0)} ₸</div>
                </div>
                <div className="product-favorite" onClick={() => toggleFavorite(item.id)}>
                  {favorites.includes(item.id) ? <HeartFilled style={{ color: "red", fontSize: "24px" }} /> : <HeartOutlined style={{ color: "#FEFBEA", fontSize: "24px" }} />}
                </div>
              </div>
            </List.Item>
          )}
        />
      ) : (
        <Result status="404" title="Товары не найдены" subTitle="Извините, по вашим фильтрам товаров не нашлось" extra={<Button type="primary">Сбросить</Button>} />
      )}
    </div>
  );
};

export default ProductList;
