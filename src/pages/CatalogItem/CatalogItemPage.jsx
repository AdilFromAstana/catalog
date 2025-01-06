import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import "./CatalogItemPage.css";
import { useParams } from "react-router-dom";
import { Button, Spin } from "antd";
import { getDataById } from "../../firestoreService";

const CatalogItemPage = () => {
  const { id } = useParams();
  const [catalogItem, setCatalogItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  console.log("id: ", id);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const item = await getDataById("items", id);
      setCatalogItem(item);
      window.scrollTo({
        top: 0,
      });
    };
    fetchData();
  }, [id]);

  console.log("catalogItem: ", catalogItem);

  return (
    <Content className="content">
      <Spin size="large" spinning={!catalogItem}>
        <div className="wrapper">
          <div className="item-gallery">
            <div className="main-image-container">
              <img
                className="main-image"
                src={catalogItem?.images[currentImage]}
                alt="product"
              />
            </div>
            <div className="thumbnail-container">
              {catalogItem?.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
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
                  src={catalogItem?.images[currentImage]}
                  alt="product"
                />
              </div>
              <div className="thumbnail-container">
                {catalogItem?.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
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
              <div className="item-price">{catalogItem?.price}</div>
              <div className="buttons">
                <Button className="add-to-cart" type="primary" size="large">
                  Узнать наличие товара
                </Button>
              </div>
            </div>

            <div className="description">
              <h3>Описание</h3>
              <p>{catalogItem?.description}</p>
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
