import { Spin, Splitter } from "antd";
import { memo, useState } from "react";

const DesktopCategory = memo(
  ({
    setSecondLevelCategories,
    secondLevelCategories,
    setFirstLevelCategories,
    firstLevelCategories,
    setThirdLevelCategories,
    thirdLevelCategories,
    isLoading,
    setSelectedCategory,
  }) => {
    const [path, setPath] = useState({
      selectedFirstLevelCategory: null,
      selectedSecondLevelCategory: null,
      selectedThirdLevelCategory: null,
    });

    return (
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
                  }}
                >
                  {cat.titleRu}
                </div>
              ))
            ))}
        </Splitter.Panel>
      </Splitter>
    );
  },
);
export default DesktopCategory;
