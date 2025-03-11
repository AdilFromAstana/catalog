import { Button, Input, Modal, Select, Table } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { useUpdateAttributeAttributes } from "../../../firestoreService";

const attribute_attributes = "attribute_attributes";

const EditAttributeModal = ({
  isOpen,
  onClose,
  attributes,
  setAttributes,
  selectedItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedAttributes = localStorage.getItem(attribute_attributes);
    if (savedAttributes) {
      setAttributes(JSON.parse(savedAttributes));
    }
  }, []);

  const isLoading = false;

  // Сохраняем атрибуты в localStorage при каждом изменении
  useEffect(() => {
    if (attributes.length > 0) {
      localStorage.setItem(attribute_attributes, JSON.stringify(attributes));
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

  // const { mutate, isLoading } = useUpdateAttribute(selectedItem?.id);

  const saveChanges = () => {
    console.log("Сохраненные атрибуты:", attributes);
    // mutate(attributes);
  };

  return (
    <Modal
      title="Детали атрибутов"
      open={isOpen}
      onCancel={() => onClose()}
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
              width: 200,
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
              width: 200,
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
              width: 200,
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
              width: 200,
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
              width: 200,
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

export default EditAttributeModal;
