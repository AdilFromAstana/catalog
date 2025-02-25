import { Table, Breadcrumb, Button, Modal, Input, Select } from "antd";
import {
  useGetDataByCategory,
  useUpdateCategoryAttributes,
} from "../../firestoreService";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const LOCAL_STORAGE_KEY = "category_attributes";
const categories_breadcrumb = "categories_breadcrumb";

const BreadcrumbNavigation = ({ breadcrumb, onSelectCategory, onGoBack }) => {
  const breadcrumbItems = breadcrumb.map((item, index) => ({
    title:
      index === 0 ? (
        item.titleRu
      ) : (
        <span onClick={() => onSelectCategory(item)}>{item.titleRu}</span>
      ),
    key: item?.id || index, // Уникальный ключ
  }));

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 10 }} items={breadcrumbItems} />
      <Button
        onClick={onGoBack}
        disabled={breadcrumb.length <= 1}
        style={{ marginBottom: 10 }}
      >
        Назад
      </Button>
    </div>
  );
};

const CategoryTable = ({ data, onSelectCategory }) => (
  <Table
    dataSource={data?.categories}
    onRow={(record) => ({
      onClick: () => onSelectCategory(record),
    })}
    columns={[
      { key: "titleRu", dataIndex: "titleRu", title: "Название", width: 200 },
      { key: "level", dataIndex: "level", title: "Уровень", width: 200 },
      {
        key: "hasChild",
        dataIndex: "hasChild",
        title: "Есть подкатегории",
        render: (value) => (value ? "Да" : "Нет"),
        width: 200,
      },
    ]}
    pagination
  />
);

const CategoryModal = ({
  isOpen,
  onClose,
  attributes,
  setAttributes,
  isEditing,
  setIsEditing,
  selectedItem,
}) => {
  console.log("attributes: ", attributes);
  // Загружаем данные из localStorage при монтировании
  useEffect(() => {
    const savedAttributes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedAttributes) {
      setAttributes(JSON.parse(savedAttributes));
    }
  }, []);

  // Сохраняем атрибуты в localStorage при каждом изменении
  useEffect(() => {
    if (attributes.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(attributes));
    }
  }, [attributes]);

  const handleEditAttribute = (index, field, value) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index] = { ...updatedAttributes[index], [field]: value };
    setAttributes(updatedAttributes);
  };

  const handleDeleteAttribute = (index) => {
    const updatedAttributes = attributes.filter((_, i) => i !== index);
    setAttributes(updatedAttributes);
  };

  const addAttribute = () => {
    const newAttributes = [
      ...attributes,
      {
        code: "",
        titleRu: "",
        titleKz: "",
        dataType: "string",
      },
    ];
    setAttributes(newAttributes);
  };

  // Мутация для обновления атрибутов
  const { mutate, isLoading } = useUpdateCategoryAttributes(selectedItem?.id);

  const saveChanges = () => {
    console.log("Сохраненные атрибуты:", attributes);
    mutate(attributes); // Отправляем данные на сервер
  };

  return (
    <Modal
      title="Детали атрибутов"
      open={isOpen}
      onCancel={() => {
        onClose();
      }}
      width="70vw"
      footer={
        isEditing ? (
          <>
            <Button onClick={() => setIsEditing(false)}>Отмена</Button>
            <Button type="primary" onClick={saveChanges} loading={isLoading}>
              {isLoading ? "Сохранение..." : "Сохранить"}
            </Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Редактировать</Button>
        )
      }
    >
      {attributes.length > 0 ? (
        <Table
          dataSource={attributes.map((attr, index) => ({
            key: index,
            code: attr.code,
            attributeRu: attr.titleRu,
            attributeKz: attr.titleKz,
            dataType: attr.dataType || "string",
            index,
          }))}
          columns={[
            {
              key: "code",
              dataIndex: "code",
              title: "Code (EN)",
              render: (text, record) =>
                isEditing ? (
                  <Input
                    value={text}
                    onChange={(e) =>
                      handleEditAttribute(record.index, "code", e.target.value)
                    }
                  />
                ) : (
                  text
                ),
            },
            {
              key: "attributeRu",
              dataIndex: "attributeRu",
              title: "Атрибут (Рус)",
              render: (text, record) =>
                isEditing ? (
                  <Input
                    value={text}
                    onChange={(e) =>
                      handleEditAttribute(
                        record.index,
                        "titleRu",
                        e.target.value,
                      )
                    }
                  />
                ) : (
                  text
                ),
            },
            {
              key: "attributeKz",
              dataIndex: "attributeKz",
              title: "Атрибут (Қаз)",
              render: (text, record) =>
                isEditing ? (
                  <Input
                    value={text}
                    onChange={(e) =>
                      handleEditAttribute(
                        record.index,
                        "titleKz",
                        e.target.value,
                      )
                    }
                  />
                ) : (
                  text
                ),
            },
            {
              key: "dataType",
              dataIndex: "dataType",
              title: "Тип данных",
              render: (text, record) =>
                isEditing ? (
                  <Select
                    style={{ width: "100%" }}
                    value={text}
                    onChange={(value) =>
                      handleEditAttribute(record.index, "dataType", value)
                    }
                  >
                    <Select.Option value="string">Строка</Select.Option>
                    <Select.Option value="number">Число</Select.Option>
                    <Select.Option value="boolean">Булево</Select.Option>
                    <Select.Option value="variant">Вариант</Select.Option>
                    <Select.Option value="variantArray">
                      Несколько вариантов
                    </Select.Option>
                  </Select>
                ) : (
                  text
                ),
            },
            {
              key: "actions",
              title: "Действия",
              render: (_, record) =>
                isEditing ? (
                  <Button
                    type="text"
                    icon={<DeleteOutlined style={{ color: "red" }} />}
                    onClick={() => handleDeleteAttribute(record.index)}
                  />
                ) : null,
            },
          ]}
          pagination={false}
        />
      ) : (
        <p>Нет атрибутов</p>
      )}
      {isEditing && (
        <Button
          type="dashed"
          onClick={addAttribute}
          block
          icon={<PlusOutlined />}
        >
          Добавить атрибут
        </Button>
      )}
    </Modal>
  );
};

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

  // Загружаем breadcrumb из localStorage при монтировании
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

  // Сохраняем breadcrumb в localStorage при каждом изменении
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

  const selectCategory = (newCategory) => {
    if (!newCategory.hasChild) {
      setSelectedItem(newCategory);
      setEditedAttributes(newCategory.attributes || []);
      setIsModalOpen(true);
    } else {
      setCategory({
        level: category.level + 1,
        parentId: newCategory?.id,
        hasChild: newCategory.hasChild ?? true,
      });
      setBreadcrumb([
        ...breadcrumb,
        { ...newCategory, level: category.level + 1 },
      ]);
    }
  };

  const { data, isLoading } = useGetDataByCategory(
    "categories/getCategoriesByLevelAndParent",
    category.level,
    category.parentId,
  );

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
      <CategoryTable data={data} onSelectCategory={selectCategory} />
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
