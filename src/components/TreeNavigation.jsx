import React, { useState } from "react";
import { Button, List } from "antd";

const TreeNavigation = ({ treeData }) => {
  const [selectedKeys, setSelectedKeys] = useState([]); // Храним выбранные ключи пути

  // Находим категорию по ключу
  function findCategoryByKey(categories, key) {
    for (const category of categories) {
      if (category.key === key) return category;
      if (category.children) {
        const found = findCategoryByKey(category.children, key);
        if (found) return found;
      }
    }
    return null;
  }

  // Получаем вложенные элементы для текущего пути
  function getNestedItems(categories, keys) {
    let currentLevel = categories;
    for (const key of keys) {
      const found = currentLevel.find((item) => item.key === key);
      if (found && found.children) {
        currentLevel = found.children;
      } else {
        currentLevel = [];
      }
    }
    return currentLevel;
  }

  // Получаем весь путь выбранных элементов
  function getSelectedPath(categories, keys) {
    return keys.map((key) => findCategoryByKey(categories, key));
  }

  const selectedPath = getSelectedPath(treeData, selectedKeys); // Путь
  const currentItems = getNestedItems(treeData, selectedKeys); // Элементы текущего уровня

  // Обработка клика на элемент (переход вперёд)
  const handleClick = (key) => {
    setSelectedKeys((prevKeys) => [...prevKeys, key]); // Добавляем ключ в путь
  };

  // Возврат на определённый уровень
  const handleBackToLevel = (index) => {
    setSelectedKeys((prevKeys) => prevKeys.slice(0, index + 1)); // Обрезаем путь до указанного уровня
  };

  console.log("selectedPath: ", selectedPath);
  console.log("currentItems: ", currentItems);

  return (
    <>
      <List
        bordered
        dataSource={[...selectedPath, ...currentItems]} // Показываем весь путь и текущие элементы
        className="category-list"
        renderItem={(item, index) => {
          const isSelected = index < selectedPath.length; // Проверяем, относится ли элемент к пути
          const isThislastItem =
            currentItems.length === 0 && selectedPath.length - 1 === index; // Последний выбранный элемент

          return (
            <List.Item
              onClick={() => {
                if (isSelected) {
                  handleBackToLevel(index); // Возврат на уровень выше
                } else {
                  handleClick(item.key); // Переход на следующий уровень
                }
              }}
              className={`category-list-item ${isSelected ? "selected" : ""} ${
                isThislastItem ? "last-item" : ""
              }`}
            >
              {item.title}
            </List.Item>
          );
        }}
      />
      {currentItems.length > 0 && (
        <div className="scrollable-row">
          {currentItems.map((node) => (
            <Button
              key={node.title}
              type="primary"
              onClick={() => handleClick(node.key)}
            >
              {node.title}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default TreeNavigation;
