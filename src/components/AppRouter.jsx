import { Route, Routes, useLocation } from "react-router-dom";
import CatalogPage from "../pages/Catalog/CatalogPage";
import CatalogItemPage from "../pages/CatalogItem/CatalogItemPage";
import MainPage from "../pages/Main/MainPage";
import FavorietsPage from "../pages/Favoriets/FavorietsPage";
import CreateItemPage from "../pages/CreateItem/CreateItemPage";
import MyCatalogPage from "../pages/MyCatalog/MyCatalogPage";
import UpdateItemPage from "../pages/UpdateItem/UpdateItemPage";
import { Content } from "antd/es/layout/layout";
import { AnimatePresence, motion } from "framer-motion";
import CartPage from "../pages/Cart/CartPage";
import { useEffect, useState } from "react";
import { initializeData } from "../redux/filterSlice";
import { useDispatch } from "react-redux";
import { initialFilters, initialFlowers } from "../common/initialData";
import ProductAnalyticsPage from "../pages/Statistics/ProductAnalyticsPage";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Увеличил длительность появления
      ease: [0.22, 1, 0.36, 1], // Плавная кривая (cubic-bezier)
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.6, // Увеличил длительность исчезновения
      ease: [0.22, 1, 0.36, 1], // Та же плавная кривая
    },
  },
};

const MobileOnlyPage = () => (
  <div style={{ textAlign: "center", padding: "50px", color: "#4f4f4f" }}>
    <h1>Этот сайт доступен только с мобильных устройств</h1>
    <p>Попробуйте открыть его на телефоне или уменьшите размер окна.</p>
  </div>
);

const AppRouter = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    dispatch(
      initializeData({
        items: initialFlowers,
        filters: initialFilters,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("window.innerWidth < 768: ", window.innerWidth < 768);

  if (!isMobile) {
    return <MobileOnlyPage />;
  }

  const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/items", element: <CatalogPage /> },
    { path: "/items/:id", element: <CatalogItemPage /> },
    { path: "/favorites", element: <FavorietsPage /> },
    { path: "/create", element: <CreateItemPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/my-catalog", element: <MyCatalogPage /> },
    { path: "/my-catalog/:my-item", element: <UpdateItemPage /> },
    { path: "/statistics", element: <ProductAnalyticsPage /> },
  ];

  return (
    <Content style={{ paddingTop: "64px" }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                >
                  {route.element}
                </motion.div>
              }
              key={route.path}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Content>
  );
};

export default AppRouter;
