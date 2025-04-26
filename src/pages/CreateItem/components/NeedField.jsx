import { Form, Input, Select } from "antd";

const { Option } = Select;

const NeedField = ({ selectedCategory }) => {
  if (!selectedCategory || !selectedCategory.attributes) {
    return null; // Если категория не выбрана или нет атрибутов, ничего не отображаем
  }

  return selectedCategory.attributes.map((attribute) => (
    <Form.Item
      key={attribute.code}
      name={["attributes", attribute.code]}
      label={attribute.titleRu}
      rules={[
        { required: true, message: `Введите ${attribute.titleRu}` },
        attribute.dataType === "number"
          ? {
              type: "number",
              message: `${attribute.titleRu} должно быть числом`,
              transform: (value) => (value ? Number(value) : undefined),
            }
          : {},
      ]}
    >
      {attribute.dataType === "string" ? (
        <Input placeholder={`Введите ${attribute.titleRu}`} size="large" />
      ) : attribute.dataType === "number" ? (
        <Input
          type="number"
          placeholder={`Введите ${attribute.titleRu}`}
          size="large"
        />
      ) : attribute.dataType === "boolean" ? (
        <Select size="large" placeholder={`Выберите ${attribute.titleRu}`}>
          <Option value={true}>Да</Option>
          <Option value={false}>Нет</Option>
        </Select>
      ) : attribute.dataType === "variant" ? (
        <Select size="large" placeholder={`Выберите ${attribute.titleRu}`}>
          {attribute.variants?.map((variant) => (
            <Option key={variant} value={variant}>
              {variant}
            </Option>
          ))}
        </Select>
      ) : attribute.dataType === "variantArray" ? (
        <Select
          mode="multiple"
          size="large"
          placeholder={`Выберите ${attribute.titleRu}`}
        >
          {attribute.variants?.map((variant) => (
            <Option key={variant} value={variant}>
              {variant}
            </Option>
          ))}
        </Select>
      ) : (
        <Input placeholder={`Введите ${attribute.titleRu}`} size="large" />
      )}
    </Form.Item>
  ));
};

export default NeedField;
