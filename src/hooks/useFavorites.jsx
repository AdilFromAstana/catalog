import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  console.log(favorites);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (storedFavorites.includes(id)) {
      const updatedFavorites = storedFavorites.filter((fav) => fav !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...storedFavorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
