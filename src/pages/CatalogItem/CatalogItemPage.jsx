/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./CatalogItemPage.css";
import { useParams } from "react-router-dom";
import { Button, Spin } from "antd";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import { formatNumber } from "../../common/common";
import { initialFlowers } from "../../common/initialData";

const CatalogItemPage = () => {
  const { id } = useParams();
  const [catalogItem, setCatalogItem] = useState(null);
  const [isItemLoading, setIsItemLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [watchedItems, setWatchedItems] = useState([]);
  const [isWatchedItemsLoading, setIsWatchedItemsLoading] = useState(true);
  const [sameCategoryItems, setSameCategoryItems] = useState([]);
  const [isSameCategoryItemsLoading, setIsSameCategoryItemsLoading] =
    useState(true);
  const ViewedItemsKey = "viewedItems";

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  console.log("catalogItem", catalogItem);

  // const getWatchedItems = async () => {
  //   const viewedItemIds =
  //     JSON.parse(localStorage.getItem(ViewedItemsKey)) || [];

  //   let updatedViewedItems;
  //   if (viewedItemIds.includes(id)) {
  //     updatedViewedItems = viewedItemIds.filter((itemId) => itemId !== id);
  //   } else {
  //     updatedViewedItems = [...viewedItemIds];
  //   }
  //   updatedViewedItems.unshift(id);
  //   localStorage.setItem(ViewedItemsKey, JSON.stringify(updatedViewedItems));

  //   const { data: viewedItemsData } = useGetDataByIds({
  //     ids: updatedViewedItems.filter((itemId) => itemId !== id),
  //   });
  //   setWatchedItems(viewedItemsData ?? []);
  //   setIsWatchedItemsLoading(false);
  // };

  // const getSameCategoryItem = async ({ categoryId, exceptItemId }) => {
  //   setIsSameCategoryItemsLoading(true);
  //   const { data } = useGetDataByCategory({
  //     categoryId,
  //     exceptItemId,
  //   });
  //   setSameCategoryItems(data);
  //   setIsSameCategoryItemsLoading(false);
  // };

  useEffect(() => {
    const fetchData = async () => {
      setIsItemLoading(true);
      setIsWatchedItemsLoading(true);
      setIsSameCategoryItemsLoading(true);
      const item = initialFlowers.find((flower) => flower.id === id);
      setCatalogItem(item);
      window.scrollTo({
        top: 0,
      });
      setIsItemLoading(false);

      // getWatchedItems();
      // getSameCategoryItem({
      //   categoryId: item.category,
      //   exceptItemId: item.id,
      // });

      const itemBouquet = Array.isArray(item.bouquetComposition)
        ? item.bouquetComposition
        : [item.bouquetComposition];

      const filteredItems = initialFlowers.filter(
        (flower) =>
          flower.id !== item.id && // Исключаем текущий item
          flower.bouquetComposition.some((composition) =>
            itemBouquet.includes(composition)
          )
      );

      setSameCategoryItems(filteredItems);

      setIsItemLoading(false);
      setIsSameCategoryItemsLoading(false);
      setIsWatchedItemsLoading(false);
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsItemLoading(true);
  //     setIsWatchedItemsLoading(true);
  //     setIsSameCategoryItemsLoading(true);
  //     const { data: item } = useGetDataById("items", id);
  //     setCatalogItem(item);
  //     window.scrollTo({
  //       top: 0,
  //     });
  //     setIsItemLoading(false);

  //     getWatchedItems();
  //     getSameCategoryItem({
  //       categoryId: item.categoryId,
  //       exceptItemId: item.id,
  //     });
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <Spin size="large" spinning={!catalogItem}>
      <div style={{ margin: "0 20px" }}>
        <div className="wrapper">
          <div className="item-gallery">
            <div className="main-image-container">
              <img
                className="main-image"
                src={catalogItem?.images[currentImage]?.url || ""}
                alt="product"
              />
            </div>
            <div className="thumbnail-container">
              {catalogItem?.images?.map((image, index) => (
                <img
                  key={image?.url}
                  src={image?.url}
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
                  src={catalogItem?.images[currentImage].url}
                  alt="product"
                />
              </div>
              <div className="thumbnail-container">
                {catalogItem?.images.map((image, index) => (
                  <img
                    key={image.url}
                    src={image.url}
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
              <div className="item-price">
                {formatNumber(catalogItem?.price ?? 0)}₸
              </div>
              <div className="buttons">
                <Button
                  className="add-to-cart"
                  type="primary"
                  size="large"
                  style={{ color: "#091235" }}
                >
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
                <li>Кол-во цветов: {catalogItem?.flowerCount}</li>
                <li>Высота цветов: {catalogItem?.flowerHeight}</li>
                <li>
                  Состав букета:{" "}
                  {catalogItem?.bouquetComposition.map((item) => item)}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {watchedItems.length > 0 && (
            <RelatedCarousel
              title="Вы недавно смотрели"
              products={watchedItems}
              isLoading={isWatchedItemsLoading}
              setIsItemLoading={setIsItemLoading}
              id={id}
            />
          )}
          {sameCategoryItems.length > 0 && (
            <RelatedCarousel
              title={catalogItem?.categoryRu}
              products={sameCategoryItems}
              isLoading={isSameCategoryItemsLoading}
              setIsItemLoading={setIsItemLoading}
              id={id}
            />
          )}
        </div>
      </div>
    </Spin>
  );
};

export default CatalogItemPage;
