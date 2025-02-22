import { Route, Routes, useLocation } from "react-router-dom";
import CatalogPage from "../pages/Catalog/CatalogPage";
import CatalogItemPage from "../pages/CatalogItem/CatalogItemPage";
import FavorietsPage from "../pages/Favoriets/FavorietsPage";
import CreateItemPage from "../pages/CreateItem/CreateItemPage";
import MyCatalogPage from "../pages/MyCatalog/MyCatalogPage";
import UpdateItemPage from "../pages/UpdateItem/UpdateItemPage";
import { Content } from "antd/es/layout/layout";
import { AnimatePresence, motion } from "framer-motion";

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

const AppRouter = () => {
  const location = useLocation();
  
  const routes = [
    { path: "/", element: <CatalogPage /> },
    { path: "/:id", element: <CatalogItemPage /> },
    { path: "/favorites", element: <FavorietsPage /> },
    { path: "/create", element: <CreateItemPage /> },
    { path: "/my-catalog", element: <MyCatalogPage /> },
    { path: "/my-catalog/:my-item", element: <UpdateItemPage /> },
  ];

  return (
    <Content>
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
