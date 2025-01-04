import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import CatalogItemPage from "../pages/CatalogItemPage";

const AppRouter = () => {
  const routes = [
    { path: "/", element: <CatalogPage /> },
    { path: "/:id", element: <CatalogItemPage /> },
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
