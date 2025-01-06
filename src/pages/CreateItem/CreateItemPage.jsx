import { Button, Form, Input, List, message, Modal } from "antd";
import { useEffect, useState } from "react";
import {
  addData,
  getData,
  getDataById,
  uploadFile,
} from "../../firestoreService";
import { DownCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import "./CreateItemPage.css";

function findCategoryByKey(categories, key) {
  for (const category of categories) {
    if (category.key === key) return category;
    if (category.children) {
      const found = findCategoryByKey(category.children, key);
      if (found) return found;
    }
  }
  return null;
}

function getSelectedPath(categories, keys) {
  return keys.map((key) => findCategoryByKey(categories, key));
}

function getNestedItems(categories, keys) {
  let currentLevel = categories;
  for (const key of keys) {
    const found = currentLevel.find((item) => item.key === key);
    if (found && found.children) {
      currentLevel = found.children;
    } else {
      currentLevel = [];
    }
  }
  return currentLevel;
}

const CreateItemPage = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [categories, setCategories] = useState([]);
  const language = localStorage.getItem("language") || "ru";
  const [form] = Form.useForm();

  const [selectedKeys, setSelectedKeys] = useState([]);

  const currentItems = selectedKeys.length
    ? getNestedItems(categories, selectedKeys)
    : categories;

  const selectedPath = getSelectedPath(categories, selectedKeys);

  const handleClick = (key) => {
    console.log("key: ", key);
    const clickedItem = findCategoryByKey(categories, key);
    console.log("clickedItem: ", clickedItem);

    if (!clickedItem?.children) {
      form.setFieldValue("categoryId", key);
    }

    setSelectedKeys((prevKeys) => [...prevKeys, key]);
  };

  const handleBackToLevel = (index) => {
    // Сохраняем только ключи до указанного уровня включительно
    setSelectedKeys((prevKeys) => prevKeys.slice(0, index + 1));
  };

  const transformData = (items) => {
    return items.map((item) => {
      const title =
        language === "kz"
          ? item.titleKz
          : language === "en"
          ? item.titleEn
          : item.titleRu;

      const children = item.children ? transformData(item.children) : null;

      return {
        key: item.key,
        title: title,
        children: children,
      };
    });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.map((file) => ({
      file,
      previewURL: URL.createObjectURL(file),
    }));

    setUploadedImages((prev) => [...prev, ...imageFiles]);
  };

  const handlePreview = (imageURL) => {
    setPreviewImage(imageURL);
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
    setPreviewImage("");
  };

  const handleDelete = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const data = {
      title: form.getFieldValue("title"),
      description: form.getFieldValue("description"),
      categoryId: form.getFieldValue("categoryId"),
      createdAt: new Date(),
    };

    try {
      setLoading(true);

      const uploadedImageURLs = await Promise.all(
        uploadedImages.map(async (image) => {
          if (image.file) {
            return await uploadFile(image.file);
          }
          return image.previewURL; // Если URL уже существует, просто возвращаем его
        })
      );

      data.images = uploadedImageURLs;

      await addData("items", data);
      message.success("Данные успешно сохранены!");
      setUploadedImages([]);
    } catch (error) {
      message.error("Ошибка при сохранении данных.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getDataById("category", "AyZb1AB6NzYmh0YIfu8G");
      setCategories([
        {
          key: 0,
          children: transformData(JSON.parse(data.scheme)),
          title: "Все категории",
        },
      ]);
    };
    fetchItems();
  }, []);

  return (
    <div className="form-container">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="form"
      >
        <Form.Item
          name="title"
          label="Название товара"
          rules={[{ required: true, message: "Введите название товара" }]}
        >
          <Input placeholder="Введите название" />
        </Form.Item>

        <Form.Item label="Категория" required={true} name="categoryId">
          <List
            bordered
            dataSource={[...selectedPath, ...currentItems]}
            className="category-list"
            renderItem={(item, index) => {
              const isSelected = index < selectedPath.length;
              const isThislastItem =
                currentItems.length === 0 && selectedPath.length - 1 === index;
              return (
                <List.Item
                  onClick={() => {
                    if (isSelected) {
                      handleBackToLevel(index);
                    } else {
                      handleClick(item.key);
                    }
                  }}
                  className={`category-list-item ${
                    isSelected ? "selected" : ""
                  } ${isThislastItem ? "last-item" : ""}`}
                >
                  {item.title}
                  {isSelected && !isThislastItem && <DownCircleOutlined />}
                  {isSelected && isThislastItem && <CheckCircleOutlined />}
                </List.Item>
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Описание товара"
          rules={[{ required: true, message: "Введите описание товара" }]}
        >
          <Input.TextArea rows={4} placeholder="Введите описание" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Цена товара"
          rules={[
            { required: true, message: "Введите цену товара" },
            {
              type: "number",
              message: "Цена должна быть числом",
              transform: (value) => Number(value),
            },
          ]}
        >
          <Input placeholder="Введите цену" type="tel" />
        </Form.Item>

        <Form.Item
          label="Изображения товара"
          rules={[
            { required: true, message: "Загрузите хотя бы одно изображение" },
          ]}
        >
          <List
            className="image-list"
            grid={{ gutter: 16, column: 2 }}
            dataSource={[...uploadedImages, { isUploadButton: true }]}
            renderItem={(item) =>
              item.isUploadButton ? (
                <List.Item>
                  <label htmlFor="file-upload" className="upload-button">
                    <div className="upload-text">Загрузить изображение</div>
                    <div className="upload-icon">+</div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, form)}
                    className="file-input"
                  />
                </List.Item>
              ) : (
                <List.Item className="item-image-wrapper">
                  <img
                    src={item.previewURL}
                    alt={item.previewURL || "Продукт"}
                    className="item-image"
                    onClick={() => handlePreview(item.previewURL)}
                  />
                </List.Item>
              )
            }
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Сохранить товар
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={handleClosePreview}
        className="image-preview-modal"
      >
        <img alt="preview" className="preview-image" src={previewImage} />
      </Modal>
    </div>
  );
};
export default CreateItemPage;
