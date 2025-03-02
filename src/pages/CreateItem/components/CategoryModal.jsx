/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Modal, Spin, Splitter, Button } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

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
  const queryClient = useQueryClient();
  const [level, setLevel] = useState(1);
  const [parentId, setParentId] = useState(null);
  const [firstLevelCategories, setFirstLevelCategories] = useState([]);
  const [secondLevelCategories, setSecondLevelCategories] = useState([]);
  const [thirdLevelCategories, setThirdLevelCategories] = useState([]);
  const [path, setPath] = useState({
    selectedFirstLevelCategory: null,
    selectedSecondLevelCategory: null,
    selectedThirdLevelCategory: null,
  });

  const { data: data, isLoading } = useQuery({
    queryKey: [
      "getCategoriesByLevelAndParent",
      {
        level,
        parentId,
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
    enabled: !!level,
  });

  useEffect(() => {
    if (level === 1) {
      setFirstLevelCategories(data?.categories || []);
    } else if (level === 2) {
      setSecondLevelCategories(data?.categories || []);
    } else if (level === 3) {
      setThirdLevelCategories(data?.categories || []);
    }
  }, [data]);

  return (
    <Modal
      maskClosable={false}
      title="Выберите категорию"
      open={isModalCategoryOpen}
      onCancel={() => setIsModalCategoryOpen(false)}
      footer={[
        <Button
          type="primary"
          disabled={selectedCategory?.hasChild}
          onClick={() => {
            form.setFieldValue("categoryId", selectedCategory.titleRu);
            setIsModalCategoryOpen(false);
          }}
        >
          Выбрать
        </Button>,
      ]}
      width="75vw"
    >
      <Spin spinning={isLoading}>
        <Splitter style={{ height: "400px" }}>
          <Splitter.Panel
            size={400}
            style={{ background: "#fff" }}
            resizable={false}
          >
            {isLoading ? (
              <Spin spinning />
            ) : (
              firstLevelCategories?.map((cat) => (
                <div
                  key={cat.id}
                  style={{
                    padding: 10,
                    cursor: "pointer",
                    borderRadius: 5,
                    backgroundColor:
                      path.selectedFirstLevelCategory?.id === cat.id
                        ? "#007bff"
                        : "#f5f5f5", // Синий фон для выбранного
                    color:
                      path.selectedFirstLevelCategory?.id === cat.id
                        ? "#fff"
                        : "#000", // Белый текст для выбранного
                    border:
                      path.selectedFirstLevelCategory?.id === cat.id
                        ? "2px solid #0056b3"
                        : "1px solid #ddd", // Граница
                    transition: "all 0.3s ease-in-out", // Плавный переход
                  }}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPath({
                      selectedSecondLevelCategory: null,
                      selectedThirdLevelCategory: null,
                      selectedFirstLevelCategory: cat,
                    });
                    setLevel(2);
                    setParentId(cat.id);
                    setSecondLevelCategories([]);
                    setThirdLevelCategories([]);
                  }}
                >
                  {cat.titleRu}
                </div>
              ))
            )}
          </Splitter.Panel>

          <Splitter.Panel
            size={400}
            style={{ background: "#fff" }}
            resizable={false}
          >
            {secondLevelCategories.length > 0 &&
              (isLoading ? (
                <Spin />
              ) : (
                secondLevelCategories.map((cat) => (
                  <div
                    key={cat.id}
                    style={{
                      padding: 10,
                      cursor: "pointer",
                      borderRadius: 5,
                      backgroundColor:
                        path.selectedSecondLevelCategory?.id === cat.id
                          ? "#007bff"
                          : "#f5f5f5", // Синий фон для выбранного
                      color:
                        path.selectedSecondLevelCategory?.id === cat.id
                          ? "#fff"
                          : "#000", // Белый текст для выбранного
                      border:
                        path.selectedSecondLevelCategory?.id === cat.id
                          ? "2px solid #0056b3"
                          : "1px solid #ddd", // Граница
                      transition: "all 0.3s ease-in-out", // Плавный переход
                    }}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPath((prev) => ({
                        ...prev,
                        selectedSecondLevelCategory: cat,
                        selectedThirdLevelCategory: null,
                      }));
                      setLevel(3);
                      setParentId(cat.id);
                      setThirdLevelCategories([]);
                    }}
                  >
                    {cat.titleRu}
                  </div>
                ))
              ))}
          </Splitter.Panel>

          <Splitter.Panel
            size={400}
            style={{ background: "#fff" }}
            resizable={false}
          >
            {thirdLevelCategories.length > 1 &&
              (isLoading ? (
                <Spin />
              ) : (
                thirdLevelCategories.map((cat) => (
                  <div
                    key={cat.id}
                    style={{
                      padding: 10,
                      cursor: "pointer",
                      borderRadius: 5,
                      backgroundColor:
                        path.selectedThirdLevelCategory?.id === cat.id
                          ? "#007bff"
                          : "#f5f5f5", // Синий фон для выбранного
                      color:
                        path.selectedThirdLevelCategory?.id === cat.id
                          ? "#fff"
                          : "#000", // Белый текст для выбранного
                      border:
                        path.selectedThirdLevelCategory?.id === cat.id
                          ? "2px solid #0056b3"
                          : "1px solid #ddd", // Граница
                      transition: "all 0.3s ease-in-out", // Плавный переход
                    }}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPath((prev) => ({
                        ...prev,
                        selectedThirdLevelCategory: cat,
                      }));
                      setLevel(4);
                      setParentId(cat.id);
                    }}
                  >
                    {cat.titleRu}
                  </div>
                ))
              ))}
          </Splitter.Panel>
        </Splitter>
      </Spin>
    </Modal>
  );
};

export default CategoryModal;
