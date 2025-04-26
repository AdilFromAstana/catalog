import React, { useEffect, useRef, useState } from "react";
import { List } from "antd";
import "./CategoryQuickAccess.css";

const categories = [
  {
    title: "Розы",
    image:
      "https://romashkino.ru/upload/resize_cache/webp/iblock/d0e/9316131688441ea6b5931b50ba205e5c.webp",
  },
  {
    title: "Тюльпаны",
    image:
      "https://avatars.mds.yandex.net/get-mpic/4356316/img_id8670951831135120149.jpeg/orig",
  },
  {
    title: "Ранункулюсы",
    image:
      "https://content2.flowwow-images.com/data/flowers/1000x1000/64/1665773866_72521364.jpg",
  },
  {
    title: "Лилии",
    image:
      "https://avatars.mds.yandex.net/get-mpic/5214322/img_id5834037899643899130.jpeg/orig",
  },
  {
    title: "Гвоздики",
    image:
      "https://tebebuketekb.ru/image/cache/catalog/%20%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2/1%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D0%B8%D0%BA%D0%B0%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-800x800.jpg",
  },
];

const CategoryQuickAccess = () => {
  const [carouselItemWidth, setCarouselItemWidth] = useState(0);
  const carouselWrapperRef = useRef(null);

  useEffect(() => {
    const updateItemWidth = () => {
      if (carouselWrapperRef.current) {
        const pageWidth = window.innerWidth;
        const carouselWidth = carouselWrapperRef.current.offsetWidth;

        let cardWidth;
        if (pageWidth <= 768) {
          cardWidth = carouselWidth / 5;
        }

        setCarouselItemWidth(cardWidth);
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  return (
    <div className="categoryQuickAccess">
      <h2 className="categoryQuickAccess__title">Категории</h2>
      <div ref={carouselWrapperRef}>
        <List
          grid={null}
          className="categoryQuickAccess__list"
          dataSource={categories}
          renderItem={(item) => (
            <List.Item
              className="categoryQuickAccess__item"
              style={{ width: `${carouselItemWidth}px` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="categoryQuickAccess__image"
              />
              <div className="categoryQuickAccess__label">{item.title}</div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default CategoryQuickAccess;
