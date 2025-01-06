import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/Catalog/CatalogPage";
import CatalogItemPage from "../pages/CatalogItem/CatalogItemPage";
import FavorietsPage from "../pages/Favoriets/FavorietsPage";
import CreateItemPage from "../pages/CreateItem/CreateItemPage";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <CatalogPage /> },
    { path: "/:id", element: <CatalogItemPage /> },
    { path: "/favorites", element: <FavorietsPage /> },
    { path: "/profile", element: <CreateItemPage /> },
  ];

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route path={route.path} element={route.element} key={route.path} />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
