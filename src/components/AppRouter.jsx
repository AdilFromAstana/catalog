import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/Catalog/CatalogPage";
import CatalogItemPage from "../pages/CatalogItem/CatalogItemPage";
import FavorietsPage from "../pages/Favoriets/FavorietsPage";
import CreateItemPage from "../pages/CreateItem/CreateItemPage";
import MyCatalogPage from "../pages/MyCatalog/MyCatalogPage";
import UpdateItemPage from "../pages/UpdateItem/UpdateItemPage";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <CatalogPage /> },
    { path: "/:id", element: <CatalogItemPage /> },
    { path: "/favorites", element: <FavorietsPage /> },
    { path: "/create", element: <CreateItemPage /> },
    { path: "/my-catalog", element: <MyCatalogPage /> },
    { path: "/my-catalog/:my-item", element: <UpdateItemPage /> },
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
