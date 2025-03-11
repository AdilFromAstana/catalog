/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./CatalogItemPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Flex, Spin } from "antd";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import { formatNumber } from "../../common/common";
import { initialFlowers } from "../../common/initialData";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import useFavorites from "../../hooks/useFavorites";
import useCart from "../../hooks/useCart";
import {
  getSource,
  logProductView,
  useFetchItemById,
  useFetchItemsByCategory,
} from "../../firestoreService";

const CatalogItemPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { toggleFavorite, favorites } = useFavorites();
  const { addToCart, cart, removeFromCart } = useCart();
  const [isItemLoading, setIsItemLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [watchedItems, setWatchedItems] = useState([]);
  const [isWatchedItemsLoading, setIsWatchedItemsLoading] = useState([]);

  const { data } = useFetchItemById({ itemId: id });

  const {
    data: sameCategoryItems = [],
    isLoading: isSameCategoryItemsLoading,
  } = useFetchItemsByCategory({
    categoryId: data?.categoryId,
    businessId: 1,
    limit: 10,
    enabledOn: data?.categoryId !== undefined && data?.categoryId !== null,
  });

  const cartItem = cart?.find((cartItem) => cartItem?.id === data?.id);

  const ViewedItemsKey = "viewedItems";

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const getWatchedItems = async () => {
    const viewedItemIds =
      JSON.parse(localStorage.getItem(ViewedItemsKey)) || [];

    let updatedViewedItems = viewedItemIds.filter((itemId) => itemId !== id); // Убираем текущий товар
    updatedViewedItems.unshift(id); // Добавляем в начало

    // Ограничиваем список до 10 элементов
    if (updatedViewedItems.length > 10) {
      updatedViewedItems = updatedViewedItems.slice(0, 10);
    }

    // Сохраняем в локальное хранилище (включая текущий товар)
    localStorage.setItem(ViewedItemsKey, JSON.stringify(updatedViewedItems));

    // Получаем данные товаров, **но исключаем текущий элемент (id)**
    const viewedItemsData = updatedViewedItems
      .filter((itemId) => itemId !== id) // Исключаем текущий товар
      .map((itemId) => initialFlowers.find((item) => item.id === itemId))
      .filter(Boolean); // Убираем `undefined`, если товар удален

    setWatchedItems(viewedItemsData); // Обновляем отображаемые товары
    setIsWatchedItemsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsItemLoading(true);
      setIsWatchedItemsLoading(true);

      window.scrollTo({ top: 0 });
      setIsItemLoading(false);
      getWatchedItems();
    };

    fetchData();

    const source = getSource();
    const viewStart = Date.now();

    const handleBeforeUnload = () => {
      const duration = Math.floor((Date.now() - viewStart) / 1000);
      if (duration > 3) {
        logProductView({ productId: id, source, duration });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [id]);

  const message = `Здравствуйте!\nПодскажите, есть ли в наличии "${data?.title}"?\nhttps://catalog-beta.vercel.app/${data?.id}`;
  const whatsappUrl = `https://wa.me/77761156416?text=${encodeURIComponent(message)}`;

  return (
    <Spin size="large" spinning={!data}>
      <div style={{ margin: "0 20px" }}>
        <div className="wrapper">
          <div className="item-gallery">
            <div className="main-image-container">
              <img
                className="main-image"
                src={data?.images[currentImage]?.imageUrl || ""}
                alt="product"
              />
            </div>
            <div className="thumbnail-container">
              {data?.images?.map((image, index) => (
                <img
                  key={image?.imageUrl}
                  src={image?.imageUrl}
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
            <h2 className="item-title">{data?.title}</h2>
            <div className="mobile-item-gallery">
              <div className="mobile-image-container">
                <img
                  className="mobile-image"
                  src={data?.images[currentImage].imageUrl}
                  alt="product"
                />
              </div>
              <div className="thumbnail-container">
                {data?.images.map((image, index) => (
                  <img
                    key={image.imageUrl}
                    src={image.imageUrl}
                    alt={`Thumbnail ${index}`}
                    className={`thumbnail ${
                      currentImage === index ? "active-thumbnail" : ""
                    }`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>

            <div className="item-price">
              {formatNumber(data?.price ?? 0)}{" "}
              <span style={{ fontSize: 24 }}>₸.</span>
            </div>

            <div
              className="buttons"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 40px",
                  gap: 10,
                }}
              >
                {cartItem ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 40px 40px 1fr",
                      gap: 10,
                    }}
                  >
                    <Button
                      style={{
                        color: "#FEFBEA",
                        border: "2px solid #FEFBEA",
                        background: "#091235",
                        height: "40px",
                        fontSize: 36,
                        opacity: cartItem.quantity === 5 ? 0.5 : 1,
                      }}
                      disabled={cartItem.quantity === 5}
                      onClick={() => addToCart(data.id)}
                    >
                      +
                    </Button>
                    <div
                      style={{
                        fontSize: "20px",
                        color: "#FEFBEA",
                        margin: "auto",
                      }}
                    >
                      {cartItem?.quantity}
                    </div>
                    <Button
                      style={{
                        color: "#FEFBEA",
                        border: "2px solid #FEFBEA",
                        background: "#091235",
                        height: "40px",
                        fontSize: 36,
                      }}
                      onClick={() => removeFromCart(data.id)}
                    >
                      -
                    </Button>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        color: "#FEFBEA",
                        border: "2px solid #FEFBEA",
                        background: "#091235",
                      }}
                      onClick={() => nav("/cart")}
                    >
                      В корзину
                    </Button>
                  </div>
                ) : (
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      color: "#FEFBEA",
                      border: "2px solid #FEFBEA",
                      background: "#091235",
                    }}
                    onClick={() => addToCart(data.id)}
                  >
                    Добавить в корзину
                  </Button>
                )}
                <Button
                  type="primary"
                  size="large"
                  style={{
                    color: "#FEFBEA",
                    border: "2px solid #FEFBEA",
                    background: "#091235",
                  }}
                  onClick={() => toggleFavorite(data?.id)}
                >
                  {favorites.includes(data?.id) ? (
                    <HeartFilled style={{ color: "red", fontSize: "24px" }} />
                  ) : (
                    <HeartOutlined
                      style={{ color: "#FEFBEA", fontSize: "24px" }}
                    />
                  )}
                </Button>
              </div>
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="add-to-cart"
                type="primary"
                size="large"
                style={{ color: "#091235" }}
              >
                Узнать наличие товара
              </Button>
            </div>

            <div className="specifications">
              <h3>Характеристики</h3>
              {data?.attributes?.map((attribute) => {
                return (
                  <div
                    style={{ display: "grid", gridTemplateColumns: "60% 40%" }}
                  >
                    <span style={{ fontSize: "16px" }}>
                      {attribute.titleRu}
                    </span>
                    <span style={{ fontSize: "16px" }}>{attribute.value}</span>
                  </div>
                );
              })}
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
          {sameCategoryItems?.length > 0 && (
            <RelatedCarousel
              title={`Другие из "${data?.categoryTitleRu}"`}
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
