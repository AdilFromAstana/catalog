/* eslint-disable react-hooks/rules-of-hooks */
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { Modal, Spin, Button, List } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useWindowWidth from "../../../hooks/useWindowWidth";
import DesktopCategory from "./DesktopCategory";
import BreadcrumbNavigation from "../../../components/BreadcrumbNavigation";

const API_URL = "http://192.168.0.18:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchCategories = async ({ level, parentId }) => {
  const response = await api.get(
    `${API_URL}/categories/getCategoriesByLevelAndParent`,
    {
      params: {
        level,
        parentId,
      },
    },
  );
  return response.data;
};

const CategoryModal = ({
  form,
  isModalCategoryOpen,
  setIsModalCategoryOpen,
  setSelectedCategory,
  selectedCategory,
}) => {
  const width = useWindowWidth();
  const queryClient = useQueryClient();
  const [level, setLevel] = useState(1);
  const [parentId, setParentId] = useState(null);
  const [firstLevelCategories, setFirstLevelCategories] = useState([]);
  const [secondLevelCategories, setSecondLevelCategories] = useState([]);
  const [thirdLevelCategories, setThirdLevelCategories] = useState([]);

  const [breadcrumb, setBreadcrumb] = useState([
    {
      id: null,
      titleRu: "Все категории",
      level: 1,
      parentId: null,
      hasChild: true,
    },
  ]);

  const { data, isLoading } = useQuery({
    queryKey: [
      "getCategoriesByLevelAndParent",
      {
        level: selectedCategory.level || 1,
        parentId: selectedCategory.parentId,
      },
    ],
    queryFn: async ({ queryKey }) => {
      const [, params] = queryKey;

      const cachedData = queryClient.getQueryData([
        "getCategoriesByLevelAndParent",
        params,
      ]);
      if (cachedData) {
        return cachedData;
      }

      return fetchCategories(params);
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    enabled: !!selectedCategory.level,
  });

  const selectCategory = (newCategory) => {
    if (!newCategory.hasChild) {
      setSelectedCategory(newCategory);
      setIsModalCategoryOpen(true);
    } else {
      const existsInBreadcrumb = breadcrumb.some(
        (item) => item.id === newCategory.id,
      );

      if (!existsInBreadcrumb) {
        console.log("Добавляем новую категорию в breadcrumb:", newCategory);

        setSelectedCategory({
          level: newCategory.level + 1,
          parentId: newCategory?.id,
          hasChild: newCategory.hasChild ?? true,
        });

        setLevel(newCategory.level + 1);
        setParentId(newCategory?.id);

        setBreadcrumb((prev) => [
          ...prev,
          { ...newCategory, level: newCategory.level + 1 },
        ]);
      }
    }
  };

  const getIcon = (category, selectedCategory, breadcrumb) => {
    if (selectedCategory?.id === category.id && !category.hasChild) {
      return <CheckOutlined style={{ color: "green" }} />;
    }

    if (
      category.hasChild ||
      breadcrumb.some((item) => item.id === category.id)
    ) {
      return <RightOutlined />;
    }

    return null;
  };

  const memoizedIcon = useMemo(
    () => (category) => getIcon(category, selectedCategory, breadcrumb),
    [selectedCategory, breadcrumb],
  );

  const goBack = () => {
    if (breadcrumb.length > 1) {
      const newBreadcrumb = breadcrumb.slice(0, -1);
      const previousCategory = newBreadcrumb[newBreadcrumb.length - 1];

      setSelectedCategory({
        level: previousCategory.level,
        parentId: previousCategory?.id,
        hasChild: previousCategory.hasChild ?? true,
      });

      setBreadcrumb(newBreadcrumb);
    }
  };

  useEffect(() => {
    if (selectedCategory.level === 1) {
      setFirstLevelCategories(data?.categories || []);
    } else if (selectedCategory.level === 2) {
      setSecondLevelCategories(data?.categories || []);
    } else if (selectedCategory.level === 3) {
      setThirdLevelCategories(data?.categories || []);
    }
  }, [data]);

  useEffect(() => {
    if (isModalCategoryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalCategoryOpen]);

  return (
    <Modal
      maskClosable={false}
      title="Выберите категорию"
      open={isModalCategoryOpen}
      onCancel={() => setIsModalCategoryOpen(false)}
      style={{
        top: "5svh",
      }}
      styles={{
        body: {
          overflow: "auto",
          height: "70svh",
        },
      }}
      footer={[
        <Button
          type="primary"
          disabled={selectedCategory.hasChild}
          onClick={() => {
            form.setFieldValue("categoryId", selectedCategory?.titleRu);
            setIsModalCategoryOpen(false);
          }}
        >
          Выбрать
        </Button>,
      ]}
      width={"95vw"}
    >
      <Spin spinning={isLoading}>
        {width >= 768 ? (
          <DesktopCategory
            firstLevelCategories={firstLevelCategories}
            setFirstLevelCategories={setFirstLevelCategories}
            secondLevelCategories={secondLevelCategories}
            setSecondLevelCategories={setSecondLevelCategories}
            thirdLevelCategories={thirdLevelCategories}
            setThirdLevelCategories={setThirdLevelCategories}
            isLoading={isLoading}
            setSelectedCategory={setSelectedCategory}
          />
        ) : (
          <>
            <BreadcrumbNavigation
              breadcrumb={breadcrumb}
              onSelectCategory={selectCategory}
              onGoBack={goBack}
            />
            <List
              dataSource={data?.categories || []}
              renderItem={(category) => {
                return (
                  <List.Item onClick={() => selectCategory(category)}>
                    <List.Item.Meta title={category.titleRu} />
                    {memoizedIcon(category)}
                  </List.Item>
                );
              }}
            />
          </>
        )}
      </Spin>
    </Modal>
  );
};

export default CategoryModal;
