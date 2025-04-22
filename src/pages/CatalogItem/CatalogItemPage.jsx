import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MobileProductGallery from "./Components/MobileProductGallery";
import ProductGallery from "./Components/ProductGallery";
import ProductActions from "./Components/ProductActions";
import BackButton from "./Components/BackButton";
import ProductSpecifications from "./Components/ProductSpecifications";
import useFavorites from "../../hooks/useFavorites";
import useCart from "../../hooks/useCart";
import { Spin } from "antd";
import { formatNumber } from "../../common/common";
import { initialFlowers } from "../../common/initialData";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import "./CatalogItemPage.css";
import ImageModal from "./Components/ImageModal";

const CatalogItemPage = memo(() => {
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

  console.log(sameCategoryItems);

  const cartItem = cart?.find((cartItem) => cartItem?.id === catalogItem?.id);
  const isFavorite = favorites.includes(catalogItem?.id);
  const handleImageClick = (index) => setCurrentImage(index);

  const ViewedItemsKey = "viewedItems";

  const getWatchedItems = async () => {
    const viewedItemIds =
      JSON.parse(localStorage.getItem(ViewedItemsKey)) || [];

    let updatedViewedItems = viewedItemIds.filter((itemId) => itemId !== id);
    updatedViewedItems.unshift(id);

    if (updatedViewedItems.length > 10) {
      updatedViewedItems = updatedViewedItems.slice(0, 10);
    }

    localStorage.setItem(ViewedItemsKey, JSON.stringify(updatedViewedItems));

    const viewedItemsData = updatedViewedItems
      .filter((itemId) => itemId !== id)
      .map((itemId) => initialFlowers.find((item) => item.id === itemId))
      .filter(Boolean);

    setWatchedItems(viewedItemsData);
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

      const itemBouquet = item.bouquetComposition.map((b) => b.title);

      let matchingItems = [];

      itemBouquet.forEach((flowerType) => {
        const itemsWithFlower = initialFlowers.filter(
          (flower) =>
            flower.id !== item.id &&
            flower.bouquetComposition?.some((b) => b.title === flowerType),
        );

        matchingItems.push({
          title: flowerType,
          children: itemsWithFlower,
        });
      });

      setSameCategoryItems(matchingItems);
      setIsSameCategoryItemsLoading(false);
    };

    fetchData();
  }, [id]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleImageZoom = (index) => {
    setModalImageIndex(index);
    setModalVisible(true);
  };

  const handleNextImage = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex + 1) % catalogItem.images.length,
    );
  };

  const handlePrevImage = () => {
    setModalImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + catalogItem.images.length) % catalogItem.images.length,
    );
  };

  const message = `Здравствуйте!\nПодскажите, есть ли в наличии "${catalogItem?.title}"?\nhttps://catalog-git-test-adilfromastanas-projects.vercel.app/items/${catalogItem?.id}`;
  const whatsappUrl = `https://wa.me/77761156416?text=${encodeURIComponent(message)}`;

  return (
    <Spin size="large" spinning={!catalogItem}>
      <div style={{ margin: "0 20px" }}>
        <BackButton onClick={() => nav(-1)} />

        <div className="wrapper">
          <ProductGallery
            images={catalogItem?.images || []}
            currentImage={currentImage}
            onImageClick={setCurrentImage}
            onImageZoom={handleImageZoom}
          />

          <div className="content-wrapper">
            <h2 className="item-title">{catalogItem?.title}</h2>

            <MobileProductGallery
              images={catalogItem?.images || []}
              currentImage={currentImage}
              onImageClick={setCurrentImage}
              onImageZoom={handleImageZoom}
            />

            <div className="item-price">
              {formatNumber(catalogItem?.price ?? 0)}₸
            </div>

            <ProductActions
              cartItem={cartItem}
              isFavorite={isFavorite}
              onAddToCart={() => addToCart(catalogItem.id)}
              onToggleFavorite={() => toggleFavorite(catalogItem.id)}
              onNavigateToCart={() => nav("/cart")}
              onRemoveFromCart={() => removeFromCart(catalogItem.id)}
              whatsappUrl={whatsappUrl}
            />

            <ProductSpecifications product={catalogItem} />
          </div>
          <ImageModal
            images={catalogItem?.images || []}
            currentIndex={modalImageIndex}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
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
          {sameCategoryItems.map((item) => {
            if (item.children.length > 0) {
              return (
                <RelatedCarousel
                  key={item.title}
                  title={item.title}
                  products={item.children}
                  isLoading={isSameCategoryItemsLoading}
                  setIsItemLoading={setIsItemLoading}
                  id={id}
                />
              );
            }
          })}
        </div>
      </div>
    </Spin>
  );
});

export default CatalogItemPage;
