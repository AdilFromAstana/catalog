import { Button, Form, Input, List, message, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { addData, getDataById, uploadFile } from "../../firestoreService";
import {
  DownCircleOutlined,
  CheckCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
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
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [categories, setCategories] = useState([]);
  const language = localStorage.getItem("language") || "ru";
  const [form] = Form.useForm();
  const nav = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState([]);
  const selectedPath = getSelectedPath(categories, selectedKeys);

  const currentItems = selectedKeys.length
    ? getNestedItems(categories, selectedKeys)
    : categories;

  const handleClick = (key) => {
    const clickedItem = findCategoryByKey(categories, key);

    if (!clickedItem?.children) {
      form.setFieldValue("categoryId", key);
    }

    setSelectedKeys((prevKeys) => [...prevKeys, key]);
  };

  const handleBackToLevel = (index) => {
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
    const categoryId = form.getFieldValue("categoryId");
    const categoryRu = selectedPath.find(
      (path) => path.key === categoryId
    )?.title;
    const data = {
      title: form.getFieldValue("title"),
      description: form.getFieldValue("description"),
      categoryId: categoryId,
      categoryRu: categoryRu,
      status: "archive",
      price: Number(form.getFieldValue("price")),
      createdAt: new Date(),
    };

    try {
      setIsLoading(true);

      const uploadedImageURLs = await Promise.all(
        uploadedImages.map(async (image, index) => {
          const url = image.file
            ? await uploadFile(image.file)
            : image.previewURL;
          return { url, priority: index };
        })
      );

      data.images = uploadedImageURLs;

      await addData({ collectionName: "items", data: data });
      message.success("Данные успешно сохранены!");
      setIsProductCreated(true);
    } catch (error) {
      message.error("Ошибка при сохранении данных.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true); // Устанавливаем индикатор загрузки
        const data = await getDataById("category", "AyZb1AB6NzYmh0YIfu8G");

        if (data && data.scheme) {
          setCategories([
            {
              key: 0,
              children: transformData(JSON.parse(data.scheme)),
              title: "Все категории",
            },
          ]);
        } else {
          console.error("Схема данных отсутствует или неверна");
          setCategories([]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setIsLoading(false); // Отключаем индикатор загрузки
      }
    };

    fetchItems();
  }, []);

  const isButtonDisabled =
    form.getFieldValue("title") &&
    form.getFieldValue("description") &&
    form.getFieldValue("categoryId") &&
    form.getFieldValue("price");

  return (
    <Content className="content">
      <Spin size="large" spinning={isLoading}>
        <h1>Новый товар</h1>
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
            <Input placeholder="Введите название" size="large" />
          </Form.Item>

          <Form.Item label="Категория" name="categoryId">
            <List
              bordered
              dataSource={[...selectedPath, ...currentItems]}
              className="category-list"
              renderItem={(item, index) => {
                const isSelected = index < selectedPath.length;
                const isThislastItem =
                  currentItems.length === 0 &&
                  selectedPath.length - 1 === index;
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
            label="Описание"
            rules={[{ required: true, message: "Введите описание товара" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Введите описание"
              autoSize={{ minRows: 2 }}
              showCount
              maxLength={1000}
            />
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
            <Input placeholder="Введите цену" type="tel" size="large" />
          </Form.Item>

          <Form.Item label="Изображения товара">
            <List
              className="image-list"
              grid={{ gutter: 16, column: 2 }}
              dataSource={[...uploadedImages, { isUploadButton: true }]}
              renderItem={(item, i) =>
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
                    <CloseOutlined
                      className="item-delete-icon"
                      onClick={() => handleDelete(i)}
                    />
                    <img
                      src={item.previewURL}
                      alt={item.previewURL || "Продукт"}
                      className="create-item-image"
                      onClick={() => handlePreview(item.previewURL)}
                    />
                  </List.Item>
                )
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-button"
              disabled={!isButtonDisabled}
              size="large"
            >
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
        <Modal open={isProductCreated} footer={null} maskClosable={false}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginTop: "20px" }}>Товар успешно создан!</h2>
            <p>Вы можете вернуться на главную или просмотреть свои товары.</p>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Button
                type="primary"
                onClick={() => nav("/")}
                style={{ minWidth: "120px" }}
              >
                На главную
              </Button>
              <Button
                onClick={() => nav("/my-catalog")} // Переход на страницу "Мои товары"
                style={{ minWidth: "120px" }}
              >
                Мои товары
              </Button>
            </div>
          </div>
        </Modal>
      </Spin>
    </Content>
  );
};
export default CreateItemPage;
