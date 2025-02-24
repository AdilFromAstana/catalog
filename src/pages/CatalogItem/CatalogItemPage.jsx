/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./CatalogItemPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Spin } from "antd";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import { formatNumber } from "../../common/common";
import { initialFlowers } from "../../common/initialData";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import useFavorites from "../../hooks/useFavorites";
import useCart from "../../hooks/useCart";

const CatalogItemPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { toggleFavorite, favorites } = useFavorites();
  const { addToCart, cart, removeFromCart } = useCart();
  const [catalogItem, setCatalogItem] = useState(null);
  const [isItemLoading, setIsItemLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [watchedItems, setWatchedItems] = useState([]);
  const [isWatchedItemsLoading, setIsWatchedItemsLoading] = useState(true);
  const [sameCategoryItems, setSameCategoryItems] = useState([]);
  const [isSameCategoryItemsLoading, setIsSameCategoryItemsLoading] =
    useState(true);

  const cartItem = cart?.find((cartItem) => cartItem?.id === catalogItem?.id);

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
      setIsSameCategoryItemsLoading(true);

      const item = initialFlowers.find((flower) => flower.id === id);
      setCatalogItem(item);

      window.scrollTo({ top: 0 });
      setIsItemLoading(false);
      getWatchedItems();

      if (!item) return;

      const itemBouquet = item.bouquetCompositionRu; // Массив видов цветов

      let matchingItems = [];

      // Итерируемся по каждому виду цветка в текущем букете
      itemBouquet.forEach((flowerType) => {
        // Фильтруем товары, где присутствует этот вид цветка
        const itemsWithFlower = initialFlowers.filter(
          (flower) =>
            flower.id !== item.id &&
            flower.bouquetCompositionRu.includes(flowerType),
        );

        matchingItems.push({
          title: flowerType,
          children: itemsWithFlower,
        });
      });

      setSameCategoryItems(matchingItems); // Массив [{ title: "Роза", children: [...] }, { title: "Лилия", children: [...] }]
      setIsSameCategoryItemsLoading(false);
    };

    fetchData();
  }, [id]);

  const message = `Здравствуйте!\nПодскажите, есть ли в наличии "${catalogItem?.title}"?\nhttps://catalog-beta.vercel.app/${catalogItem?.id}`;
  const whatsappUrl = `https://wa.me/77761156416?text=${encodeURIComponent(message)}`;

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

            <div className="item-price">
              {formatNumber(catalogItem?.price ?? 0)}₸
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
                      onClick={() => addToCart(catalogItem.id)}
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
                      onClick={() => removeFromCart(catalogItem.id)}
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
                    onClick={() => addToCart(catalogItem.id)}
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
                  onClick={() => toggleFavorite(catalogItem?.id)}
                >
                  {favorites.includes(catalogItem?.id) ? (
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
              <ul>
                <li>Кол-во цветов: {catalogItem?.flowerCount}</li>
                <li>Высота цветов: {catalogItem?.flowerHeight}</li>
                <li>
                  Состав букета:{" "}
                  {catalogItem?.bouquetCompositionRu.map((item) => item)}
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
          {sameCategoryItems.length > 0 &&
            sameCategoryItems.map((item) => {
              return (
                <RelatedCarousel
                  title={item?.title}
                  products={item.children}
                  isLoading={isSameCategoryItemsLoading}
                  setIsItemLoading={setIsItemLoading}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    </Spin>
  );
};

export default CatalogItemPage;
