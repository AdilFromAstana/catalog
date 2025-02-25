import { Table, Breadcrumb, Button, Modal, Input, Select } from "antd";
import { useGetDataByCategory } from "../../firestoreService";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

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
  const [editedAttributes, setEditedAttributes] = useState([]);

  const queryClient = useQueryClient();

  const { data, isFetching } = useGetDataByCategory(
    "categories/getCategoriesByLevelAndParent",
    category.level,
    category.parentId,
  );

  const selectCategory = (newCategory) => {
    if (newCategory.id !== category.parentId) {
      if (!newCategory.hasChild) {
        setSelectedItem(newCategory);
        setEditedAttributes(newCategory.attributes || []);
        setIsModalOpen(true);
      } else {
        const updatedCategory = {
          level: category.level + 1,
          parentId: newCategory.id,
          hasChild: newCategory.hasChild ?? true,
        };

        setCategory(updatedCategory);
        setBreadcrumb((prev) => [
          ...prev,
          { ...newCategory, level: category.level + 1 },
        ]);
      }
    }
  };

  const goBack = () => {
    if (breadcrumb.length > 1) {
      const newBreadcrumb = [...breadcrumb];
      newBreadcrumb.pop();
      const previousCategory = newBreadcrumb[newBreadcrumb.length - 1];

      const updatedCategory = {
        level: Math.max(1, previousCategory.level),
        parentId: previousCategory.id,
        hasChild: previousCategory.hasChild ?? true,
      };

      setCategory(updatedCategory);
      setBreadcrumb(newBreadcrumb);
    }
  };

  useEffect(() => {
    if (!isFetching && category.hasChild) {
      queryClient.invalidateQueries({
        queryKey: [
          "categories/getCategoriesByLevelAndParent",
          category.level,
          category.parentId,
        ],
        refetchType: "none",
      });
    }
  }, [category, queryClient, isFetching]);

  // Обработчик изменения атрибута
  const handleEditAttribute = (index, field, value) => {
    const updatedAttributes = [...editedAttributes];
    updatedAttributes[index] = { ...updatedAttributes[index], [field]: value };
    setEditedAttributes(updatedAttributes);
  };

  // Добавление нового атрибута
  const addAttribute = () => {
    setEditedAttributes([
      ...editedAttributes,
      {
        code: `new_${Date.now()}`,
        titleRu: "",
        titleKz: "",
        dataType: "string",
      },
    ]);
  };

  // Отмена редактирования
  const cancelEditing = () => {
    setEditedAttributes(selectedItem.attributes || []);
    setIsEditing(false);
  };

  // Сохранение изменений (эмуляция обновления API)
  const saveChanges = () => {
    console.log("Сохраненные атрибуты:", editedAttributes);
    setSelectedItem({ ...selectedItem, attributes: editedAttributes });
    setIsEditing(false);
  };

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 10 }}>
        {breadcrumb.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {index === 0 ? (
              item.titleRu
            ) : (
              <span onClick={() => selectCategory(item)}>{item.titleRu}</span>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>

      <Button
        onClick={goBack}
        disabled={breadcrumb.length <= 1}
        style={{ marginBottom: 10 }}
      >
        Назад
      </Button>

      <Table
        dataSource={data?.categories}
        onRow={(record) => ({
          onClick: () => selectCategory(record),
        })}
        columns={[
          { key: "titleRu", dataIndex: "titleRu", title: "Название" },
          { key: "level", dataIndex: "level", title: "Уровень" },
          {
            key: "hasChild",
            dataIndex: "hasChild",
            title: "Есть подкатегории",
            render: (value) => (value ? "Да" : "Нет"),
          },
        ]}
        pagination
      />

      {/* Модальное окно для редактирования атрибутов */}
      <Modal
        title="Детали атрибутов"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setIsEditing(false);
        }}
        footer={[
          isEditing ? (
            <>
              <Button key="cancel" onClick={cancelEditing}>
                Отмена
              </Button>
              <Button key="save" type="primary" onClick={saveChanges}>
                Сохранить
              </Button>
            </>
          ) : (
            <Button key="edit" onClick={() => setIsEditing(true)}>
              Редактировать
            </Button>
          ),
        ]}
      >
        {editedAttributes.length > 0 ? (
          <Table
            dataSource={editedAttributes.map((attr, index) => ({
              key: attr.code,
              attributeRu: attr.titleRu,
              attributeKz: attr.titleKz,
              dataType: attr.dataType || "string",
              index,
            }))}
            columns={[
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
                      value={text}
                      onChange={(value) =>
                        handleEditAttribute(record.index, "dataType", value)
                      }
                      style={{ width: "100%" }}
                    >
                      <Option value="string">Строка</Option>
                      <Option value="number">Число</Option>
                      <Option value="boolean">Булево</Option>
                    </Select>
                  ) : (
                    text
                  ),
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
    </div>
  );
};

export default Categories;
