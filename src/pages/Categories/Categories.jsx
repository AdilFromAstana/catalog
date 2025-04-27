import { useState, useEffect } from "react";
import CategoryTable from "./components/CategoryTable";
import CategoryModal from "./components/CategoryModal";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation";

const Categories = () => {
  const [category, setCategory] = useState({
    level: 1,
    parentId: null,
    hasChild: true,
  });

  const [breadcrumb, setBreadcrumb] = useState([
    {
      id: null,
      titleRu: "Все категории",
      level: 1,
      parentId: null,
      hasChild: true,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAttributes, setEditedAttributes] = useState(
    selectedItem?.attributes || [],
  );

  const categories_breadcrumb = "categories_breadcrumb";

  useEffect(() => {
    const savedBreadcrumb = localStorage.getItem(categories_breadcrumb);
    if (savedBreadcrumb) {
      const parsedBreadcrumb = JSON.parse(savedBreadcrumb);
      setBreadcrumb(parsedBreadcrumb);

      // Восстанавливаем последнюю категорию
      const lastCategory = parsedBreadcrumb[parsedBreadcrumb.length - 1];
      setCategory({
        level: lastCategory.level,
        parentId: lastCategory?.id,
        hasChild: lastCategory.hasChild ?? true,
      });
    }
  }, []);

  useEffect(() => {
    if (breadcrumb.length > 0) {
      localStorage.setItem(categories_breadcrumb, JSON.stringify(breadcrumb));
    }
  }, [breadcrumb]);

  const goBack = () => {
    if (breadcrumb.length > 1) {
      const newBreadcrumb = breadcrumb.slice(0, -1);
      const previousCategory = newBreadcrumb[newBreadcrumb.length - 1];

      setCategory({
        level: previousCategory.level,
        parentId: previousCategory?.id,
        hasChild: previousCategory.hasChild ?? true,
      });

      setBreadcrumb(newBreadcrumb);
    }
  };

  const selectCategory = (
    newCategory,
    isFromBreadcrumb = false,
    breadcrumbIndex = -1,
  ) => {
    if (isFromBreadcrumb) {
      const newBreadcrumb = breadcrumb.slice(0, breadcrumbIndex + 1);

      setCategory({
        level: newCategory.level,
        parentId: newCategory?.id,
        hasChild: newCategory.hasChild ?? true,
      });
      setBreadcrumb(newBreadcrumb);
    } else {
      if (!newCategory.hasChild) {
        setSelectedItem(newCategory);
        setEditedAttributes(newCategory.attributes || []);
        setIsModalOpen(true);
      } else {
        const existsInBreadcrumb = breadcrumb.some(
          (item) => item.id === newCategory.id,
        );

        if (!existsInBreadcrumb) {
          setCategory({
            level: category.level + 1,
            parentId: newCategory?.id,
            hasChild: newCategory.hasChild ?? true,
          });

          setBreadcrumb((prev) => [
            ...prev,
            { ...newCategory, level: category.level + 1 },
          ]);
        }
      }
    }
  };

  return (
    <div
      style={{
        background: "white",
        minHeight: "calc(100vh - 64px)",
        padding: "10px",
      }}
    >
      <BreadcrumbNavigation
        breadcrumb={breadcrumb}
        onSelectCategory={selectCategory}
        onGoBack={goBack}
      />
      <CategoryTable category={category} onSelectCategory={selectCategory} />
      <CategoryModal
        selectedItem={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attributes={editedAttributes}
        setAttributes={setEditedAttributes}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};

export default Categories;
