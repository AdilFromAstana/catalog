import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Функция для обновления локального хранилища и состояния
  const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  // Добавить товар (или увеличить количество, если уже есть)
  const addToCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity < 5) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
        updateCart(updatedCart);
      }
    } else {
      const newCart = [...cart, { id, quantity: 1 }];
      updateCart(newCart);
    }
  };

  // Уменьшить количество или удалить товар
  const removeFromCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        );
        updateCart(updatedCart);
      } else {
        // Если количество = 1, удаляем товар из корзины
        const updatedCart = cart.filter((item) => item.id !== id);
        updateCart(updatedCart);
      }
    }
  };

  return { addToCart, removeFromCart, cart };
};

export default useCart;
