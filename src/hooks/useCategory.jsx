import { useCallback, useMemo, useState, useEffect } from "react";
import { getDataById } from "../firestoreService";

const language = "ru";
const transformData = (items) => {
  return items.map((item) => {
    const title =
      language === "kz"
        ? item.titleKz
        : language === "en"
        ? item.titleEn
        : item.titleRu;

    const children = item.children ? transformData(item.children) : null;

    return {
      key: item.key,
      title: title,
      children: children,
    };
  });
};

const useCategory = () => {
  const [treeData, setTreeData] = useState(null); // Данные дерева
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true); // Для отслеживания загрузки
  const [error, setError] = useState(null); // Для обработки ошибок

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsCategoryLoading(true);
        const data = await getDataById("category", "AyZb1AB6NzYmh0YIfu8G"); // Вызов импортированной функции

        if (data && data.scheme) {
          try {
            const parsedScheme = JSON.parse(data.scheme);
            setSelectedCategoryKeys([0]);
            setTreeData([
              {
                key: 0,
                children: transformData(parsedScheme),
                title: "Все категории",
              },
            ]);
          } catch (err) {
            console.error("Ошибка парсинга scheme:", err);
            setError(err);
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsCategoryLoading(false);
      }
    };
    loadData();
  }, []);

  const findCategoryByKey = useCallback((categories, key) => {
    for (const category of categories) {
      if (category.key === key) return category;
      if (category.children) {
        const found = findCategoryByKey(category.children, key);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const getNestedItems = useCallback(() => {
    if (!treeData) return [];
    let currentLevel = treeData;
    for (const key of selectedCategoryKeys) {
      const found = currentLevel.find((item) => item.key === key);
      if (found && found.children) {
        currentLevel = found.children;
      } else {
        currentLevel = [];
      }
    }
    return currentLevel;
  }, [selectedCategoryKeys, treeData]);

  const getSelectedPath = useMemo(() => {
    if (!treeData) return [];
    return selectedCategoryKeys.map((key) => findCategoryByKey(treeData, key));
  }, [selectedCategoryKeys, findCategoryByKey, treeData]);

  const selectCategory = useCallback(
    (key) => {
      const lastSelectedKey =
        selectedCategoryKeys[selectedCategoryKeys.length - 1];
      if (key === lastSelectedKey) return;
      setSelectedCategoryKeys((prevKeys) => [...prevKeys, key]);
    },
    [selectedCategoryKeys]
  );

  const backToAlreadySelectedCategory = useCallback((index) => {
    setSelectedCategoryKeys((prevKeys) => prevKeys.slice(0, index + 1));
  }, []);

  const returnToPreviousCategory = useCallback(() => {
    setSelectedCategoryKeys((prevKeys) => {
      if (prevKeys.length <= 1) return prevKeys; // Если длина массива <= 1, ничего не делаем
      return prevKeys.slice(0, -1); // Убираем последний ключ
    });
  }, []);

  const getLastSelectedCategoryTitle = useMemo(() => {
    if (!treeData || selectedCategoryKeys.length === 0) return null;
    const lastKey = selectedCategoryKeys[selectedCategoryKeys.length - 1];
    const lastCategory = findCategoryByKey(treeData, lastKey);
    return lastCategory?.title || null;
  }, [selectedCategoryKeys, findCategoryByKey, treeData]);

  return {
    isCategoryLoading,
    error,
    treeData,
    selectedCategoryKeys,
    selectedCategories: getSelectedPath,
    availableCategories: getNestedItems(),
    selectCategory,
    categoryTitle: getLastSelectedCategoryTitle,
    backToAlreadySelectedCategory,
    returnToPreviousCategory,
  };
};

export default useCategory;
