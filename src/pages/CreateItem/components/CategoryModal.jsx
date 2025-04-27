// CategoryModal.jsx
import React, { useState, useEffect, memo } from "react";
import { Modal, Spin, Button, List } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useWindowWidth from "../../../hooks/useWindowWidth";
import DesktopCategory from "./DesktopCategory";
import BreadcrumbNavigation from "../../../components/BreadcrumbNavigation";

const API_URL = "http://192.168.0.14:5000/api";
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const fetchCategories = async ({ level, parentId }) => {
  const { data } = await api.get("/categories/getCategoriesByLevelAndParent", {
    params: { level, parentId },
  });
  // тут предполагаем, что ответ — массив категорий
  return data.categories || data;
};

const CategoryModal = memo(
  ({
    form,
    isModalCategoryOpen,
    setIsModalCategoryOpen,
    selectedCategory,
    setSelectedCategory,
  }) => {
    const width = useWindowWidth();

    // === STATE для навигации по уровням ===
    const [level, setLevel] = useState(1);
    const [parentId, setParentId] = useState(null);

    // === Сами списки для Desktop ===
    const [firstLevelCategories, setFirstLevelCategories] = useState([]);
    const [secondLevelCategories, setSecondLevelCategories] = useState([]);
    const [thirdLevelCategories, setThirdLevelCategories] = useState([]);
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);
    const [selectedThird, setSelectedThird] = useState(null);

    // === "хлебные крошки" для mobile и кнопки «назад» ===
    const [breadcrumb, setBreadcrumb] = useState([
      {
        id: null,
        titleRu: "Все категории",
        level: 1,
        parentId: null,
        hasChild: true,
      },
    ]);

    // === подгружаем любой уровень по level/parentId ===
    const {
      data: categories = [],
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["categories", level, parentId],
      queryFn: async () => {
        const list = await fetchCategories({ level, parentId });
        return list;
      },
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    });

    useEffect(() => {
      if (level === 1) {
        setFirstLevelCategories(categories);
        setSecondLevelCategories([]);
        setThirdLevelCategories([]);
      }
      if (level === 2) {
        setSecondLevelCategories(categories);
        setThirdLevelCategories([]);
      }
      if (level === 3) setThirdLevelCategories(categories);
    }, [categories, level]);

    const selectCategory = (cat) => {
      if (cat.hasChild) {
        setLevel(cat.level + 1);
        setParentId(cat.id);
        setBreadcrumb((b) => [...b, cat]);

        if (cat.level === 1) {
          setSelectedFirst(cat);
          setSelectedSecond(null);
          setSelectedThird(null);
        } else if (cat.level === 2) {
          setSelectedSecond(cat);
          setSelectedThird(null);
        } else if (cat.level === 3) {
          setSelectedThird(cat);
        }
      } else {
        // 💥 добавляем это:
        if (cat.level === 3) setSelectedThird(cat);

        setSelectedCategory(cat);
        form.setFieldValue("categoryId", cat.titleRu);
        setIsModalCategoryOpen(false);
      }
    };

    const goBack = () => {
      if (breadcrumb.length <= 1) return;
      const newCrumb = breadcrumb.slice(0, -1);
      const prev = newCrumb[newCrumb.length - 1];
      setBreadcrumb(newCrumb);
      setLevel(prev.level);
      setParentId(prev.id);
    };

    return (
      <Modal
        title="Выберите категорию"
        open={isModalCategoryOpen}
        onCancel={() => setIsModalCategoryOpen(false)}
        footer={
          <Button
            type="primary"
            disabled={selectedCategory?.hasChild ?? true}
            onClick={() => {
              form.setFieldValue("categoryId", selectedCategory.titleRu);
              setIsModalCategoryOpen(false);
            }}
          >
            Выбрать
          </Button>
        }
        width="95vw"
        styles={{
          body: {
            maxHeight: "70vh",
            overflowY: "auto",
          },
        }}
        maskClosable={false}
      >
        <Spin spinning={isLoading}>
          {width >= 768 ? (
            <DesktopCategory
              firstLevelCategories={firstLevelCategories}
              secondLevelCategories={secondLevelCategories}
              thirdLevelCategories={thirdLevelCategories}
              onSelectCategory={selectCategory}
              selectedFirst={selectedFirst}
              selectedSecond={selectedSecond}
              selectedThird={selectedThird}
            />
          ) : (
            <>
              <BreadcrumbNavigation
                breadcrumb={breadcrumb}
                onGoBack={goBack}
                onSelectCategory={(cat) => selectCategory(cat)}
              />
              <List
                dataSource={categories}
                renderItem={(cat) => (
                  <List.Item
                    onClick={() => selectCategory(cat)}
                    style={{ cursor: "pointer" }}
                  >
                    <List.Item.Meta title={cat.titleRu} />
                  </List.Item>
                )}
              />
            </>
          )}
        </Spin>
      </Modal>
    );
  },
);

export default CategoryModal;
