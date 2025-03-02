import { Button, Input, Modal, Select, Table } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useUpdateCategoryAttributes } from "../../../firestoreService";

const category_attributes = "category_attributes";

const CategoryModal = ({
  isOpen,
  onClose,
  attributes,
  setAttributes,
  isEditing,
  setIsEditing,
  selectedItem,
}) => {
  useEffect(() => {
    const savedAttributes = localStorage.getItem(category_attributes);
    if (savedAttributes) {
      setAttributes(JSON.parse(savedAttributes));
    }
  }, []);

  // Сохраняем атрибуты в localStorage при каждом изменении
  useEffect(() => {
    if (attributes.length > 0) {
      localStorage.setItem(category_attributes, JSON.stringify(attributes));
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
        dataType: "",
      },
    ];
    setAttributes(newAttributes);
  };

  // Мутация для обновления атрибутов
  const { mutate, isLoading } = useUpdateCategoryAttributes(selectedItem?.id);

  const saveChanges = () => {
    console.log("Сохраненные атрибуты:", attributes);
    mutate(attributes);
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
            dataType: attr.dataType,
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

export default CategoryModal;
