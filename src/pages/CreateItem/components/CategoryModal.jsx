/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Modal, Form, Input, Layout, Spin } from "antd";
import { Splitter } from "antd/es/splitter";
import { useGetDataByCategory } from "../../../firestoreService";
import { fetchCategories } from "../../../redux/categorySlice";

const { Sider, Content } = Layout;

const CategorySelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentCategories, setCurrentCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCategoryClick = (category) => {
    if (category.children) {
      setPath([...path, category]);
      fetchCategories(category.level + 1, category.parentId);
    } else {
      setSelectedCategory(
        [...path.map((p) => p.label), category.label].join(" > "),
      );
      setIsModalOpen(false);
    }
  };

  const handleBack = () => {
    if (path.length > 0) {
      const newPath = [...path];
      newPath.pop();
      setPath(newPath);
      fetchCategories(
        newPath.length ? newPath[newPath.length - 1].level + 1 : 1,
        newPath.length ? newPath[newPath.length - 1].parentId : null,
      );
    }
  };

  return (
    <>

      <Modal
        title="Выберите категорию"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <Splitter style={{ height: "400px" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            {loading ? (
              <Spin />
            ) : (
              currentCategories.map((cat) => (
                <div key={cat.key} onClick={() => handleCategoryClick(cat)}>
                  {cat.label}
                </div>
              ))
            )}
          </Sider>

          <Sider width={200} style={{ background: "#fff" }}>
            {path.length > 0 &&
              (loading ? (
                <Spin />
              ) : (
                currentCategories.map((cat) => (
                  <div key={cat.key} onClick={() => handleCategoryClick(cat)}>
                    {cat.label}
                  </div>
                ))
              ))}
          </Sider>

          <Content style={{ padding: "20px", background: "#fff" }}>
            {path.length > 1 &&
              (loading ? (
                <Spin />
              ) : (
                currentCategories.map((cat) => (
                  <div key={cat.key} onClick={() => handleCategoryClick(cat)}>
                    {cat.label}
                  </div>
                ))
              ))}
          </Content>
        </Splitter>
      </Modal>
    </>
  );
};

export default CategorySelect;
