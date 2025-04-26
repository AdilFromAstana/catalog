import { Button, List, Skeleton } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { memo, useEffect, useRef, useState } from "react";
import { formatNumber } from "../../common/common";
import "./RelatedCarousel.css";
import RelatedCarouselItem from "./RelatedCarouselItem";

const RelatedCarousel = memo(
  ({ products, isLoading = true, setIsItemLoading, title, id }) => {
    const [carouselItemWidth, setCarouselItemWidth] = useState(0);
    const carouselWrapperRef = useRef(null);

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
      const updateItemWidth = () => {
        if (carouselWrapperRef.current) {
          const pageWidth = window.innerWidth;
          const carouselWidth = carouselWrapperRef.current.offsetWidth;

          let cardWidth;
          if (pageWidth <= 768) {
            cardWidth = carouselWidth / 2;
          } else if (pageWidth <= 962) {
            cardWidth = carouselWidth / 3;
          } else if (pageWidth <= 1280) {
            cardWidth = carouselWidth / 4;
          } else {
            cardWidth = carouselWidth / 5;
          }

          setCarouselItemWidth(cardWidth);
        }
      };

      updateItemWidth();

      window.addEventListener("resize", updateItemWidth);
      return () => window.removeEventListener("resize", updateItemWidth);
    }, []);

    useEffect(() => {
      scrollToStart();
    }, [id]);

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <h2 className="related-carousel-title" style={{ margin: 0 }}>
            {title}
          </h2>
          <div style={{ display: "flex", gap: 8 }}>
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => {
                const listContainer =
                  carouselWrapperRef.current?.querySelector(".ant-list-items");
                if (listContainer) {
                  listContainer.scrollBy({
                    left: -carouselItemWidth,
                    behavior: "smooth",
                  });
                }
              }}
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={() => {
                const listContainer =
                  carouselWrapperRef.current?.querySelector(".ant-list-items");
                if (listContainer) {
                  listContainer.scrollBy({
                    left: carouselItemWidth,
                    behavior: "smooth",
                  });
                }
              }}
            />
          </div>
        </div>
        <div
          ref={carouselWrapperRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "12px 0",
          }}
        >
          {isLoading && (
            <List
              className="related-carousel-horizontal-scroll-container"
              dataSource={Array.from({ length: 12 }, (_, index) => index + 1)}
              renderItem={() => {
                return (
                  <List.Item
                    className="related-carousel-item"
                    style={{ width: `${carouselItemWidth}px` }}
                  >
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
              className="related-carousel-horizontal-scroll-container"
              renderItem={(item) => {
                return (
                  <List.Item
                    className="related-carousel-item"
                    style={{ width: `${carouselItemWidth}px` }}
                  >
                    <RelatedCarouselItem item={item} />
                  </List.Item>
                );
              }}
            />
          )}
        </div>
      </div>
    );
  },
);

export default RelatedCarousel;
