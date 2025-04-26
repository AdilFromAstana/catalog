import { Button, List, Result } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder } from "../../../../redux/filterSlice";
import { useEffect, useRef, useState } from "react";
import RelatedCarouselItem from "../../../../components/RelatedCarousel/RelatedCarouselItem";
import "./ProductList.css";

const sortButtons = [
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
];

const ProductList = ({ favorites, toggleFavorite }) => {
  const dispatch = useDispatch();

  const [carouselItemWidth, setCarouselItemWidth] = useState(0);
  const [cardsCount, setCardsCount] = useState(0);
  const carouselWrapperRef = useRef(null);

  const filteredItems = useSelector((state) => state.filters.filteredItems);
  const sort = useSelector((state) => state.filters.sortOrder);
  const handleSortChange = (option) => dispatch(setSortOrder(option));

  useEffect(() => {
    const updateItemWidth = () => {
      if (carouselWrapperRef.current) {
        const carouselWidth =
          carouselWrapperRef.current.getBoundingClientRect().width;

        let cardWidth;
        let cardsCount_;
        if (carouselWidth <= 604) {
          cardWidth = carouselWidth / 2;
          cardsCount_ = 2;
        } else if (carouselWidth <= 962) {
          cardWidth = carouselWidth / 3;
          cardsCount_ = 3;
        } else if (carouselWidth <= 1280) {
          cardWidth = carouselWidth / 4;
          cardsCount_ = 4;
        } else {
          cardWidth = carouselWidth / 5;
          cardsCount_ = 5;
        }
        setCardsCount(cardsCount_);
        setCarouselItemWidth(cardWidth);
      }
    };

    updateItemWidth();

    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      ref={carouselWrapperRef}
    >
      <div className="sort-buttons">
        {sortButtons.map((option) => (
          <Button
            key={option.value}
            type={sort.value === option.value ? "primary" : "default"}
            onClick={() => handleSortChange(option)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <List
          grid={null}
          dataSource={filteredItems}
          className="product-list-horizontal-scroll-container"
          renderItem={(item) => {
            return (
              <List.Item className="related-carousel-item">
                <RelatedCarouselItem item={item} />
              </List.Item>
            );
          }}
        />
      ) : (
        <Result
          status="404"
          title="Товары не найдены"
          subTitle="Извините, по вашим фильтрам товаров не нашлось"
          extra={<Button type="primary">Сбросить</Button>}
        />
      )}
    </div>
  );
};

export default ProductList;
