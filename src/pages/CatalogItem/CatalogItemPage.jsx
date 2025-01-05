import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./CatalogItemPage.css";
import { useParams } from "react-router-dom";
import mockProducts from "../../mockProducts";
import { Button, Spin } from "antd";

const CatalogItemPage = () => {
  const { id } = useParams();
  const [catalogItem, setCatalogItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const item = mockProducts.find((product) => product.id === id);
    setCatalogItem(item);
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  return (
    <Content className="content">
      <Spin size="large" spinning={!catalogItem}>
        <div className="wrapper">
          <div className="item-gallery">
            <div className="main-image-container">
              <img
                className="main-image"
                src={catalogItem?.previewImages[currentImage].large}
                alt="product"
              />
            </div>
            <div className="thumbnail-container">
              {catalogItem?.previewImages.map((image, index) => (
                <img
                  key={image.large}
                  src={image.large}
                  alt={`Thumbnail ${index}`}
                  className={`thumbnail ${
                    currentImage === index ? "active-thumbnail" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="content-wrapper">
            <h2 className="item-title">{catalogItem?.title}</h2>
            <div className="mobile-item-gallery">
              <div className="mobile-image-container">
                <img
                  className="mobile-image"
                  src={catalogItem?.previewImages[currentImage].large}
                  alt="product"
                />
              </div>
              <div className="thumbnail-container">
                {catalogItem?.previewImages.map((image, index) => (
                  <img
                    key={image.large}
                    src={image.large}
                    alt={`Thumbnail ${index}`}
                    className={`thumbnail ${
                      currentImage === index ? "active-thumbnail" : ""
                    }`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>

            <div className="item-info">
              <div className="item-price">{catalogItem?.priceFormatted}</div>
              <div className="buttons">
                <Button className="add-to-cart" type="primary" size="large">
                  Узнать наличие товара
                </Button>
              </div>
            </div>

            <div className="description">
              <h3>Описание</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                nihil rem quasi accusamus perferendis iure laborum, accusantium
                libero nam ullam suscipit labore temporibus illo tenetur magni
                totam rerum debitis inventore.
              </p>
            </div>

            <div className="specifications">
              <h3>Характеристики</h3>
              <ul>
                <li>Назначение: для бега</li>
                <li>Материал: пластик, текстиль</li>
                <li>Размеры: S</li>
              </ul>
            </div>
          </div>
        </div>
      </Spin>
    </Content>
  );
};

export default CatalogItemPage;
