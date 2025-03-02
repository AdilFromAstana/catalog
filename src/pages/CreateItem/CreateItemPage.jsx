/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Form, Input, List, message, Modal, Spin } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import "./CreateItemPage.css";
import CategoryModal from "./components/CategoryModal";
import NeedField from "./components/NeedField";
import { useWatch } from "antd/es/form/Form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const updateFormData = async (formData) => {
  const { data } = await api.post("/items/create", formData); // Или axios.put, если API требует PUT-запрос
  return data;
};

const CreateItemPage = () => {
  const queryClient = useQueryClient();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const language = localStorage.getItem("language") || "ru";
  const [form] = Form.useForm();
  const nav = useNavigate();

  const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const mutation = useMutation({
    mutationFn: updateFormData,
    onSuccess: () => {
      message.success("Данные успешно обновлены!");
    },
    onError: (error) => {
      message.error(`Ошибка обновления: ${error.message}`);
    },
  });

  const [path, setPath] = useState([]);

  const showModal = () => {
    setIsModalCategoryOpen(true);
    setPath([]);
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

  const handleSubmit = async (values) => {
    const categoryId = selectedCategory.id;

    // Преобразуем attributes из объекта в массив
    const attributesArray = Object.entries(values.attributes || {}).map(
      ([code, value]) => {
        const attribute = selectedCategory.attributes.find(
          (attr) => attr.code === code,
        );
        return {
          code,
          titleRu: attribute?.titleRu || code, // Название на русском
          titleKz: attribute?.titleKz || code, // Название на казахском
          dataType: attribute?.dataType || "string", // Тип данных
          value,
        };
      },
    );

    // Финальные данные для отправки
    const data = {
      businessId: 1,
      typeId: 1,
      ...values,
      categoryId,
      attributes: attributesArray, // Заменяем объект attributes на массив
    };

    try {
      setIsLoading(true);
      await mutation.mutateAsync(data);
      message.success("Данные успешно сохранены!");
      setIsProductCreated(true);
    } catch (error) {
      message.error("Ошибка при сохранении данных.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       setIsLoading(true); // Устанавливаем индикатор загрузки
  //       const { data } = useGetDataById("category", "AyZb1AB6NzYmh0YIfu8G");

  //       if (data && data.scheme) {
  //         setCategories([
  //           {
  //             key: 0,
  //             children: transformData(JSON.parse(data.scheme)),
  //             title: "Все категории",
  //           },
  //         ]);
  //       } else {
  //         console.error("Схема данных отсутствует или неверна");
  //         setCategories([]);
  //       }
  //     } catch (error) {
  //       console.error("Ошибка при загрузке данных:", error);
  //     } finally {
  //       setIsLoading(false); // Отключаем индикатор загрузки
  //     }
  //   };

  //   fetchItems();
  // }, []);

  const title = useWatch("title", form);
  const description = useWatch("description", form);
  const categoryId = useWatch("categoryId", form);
  const price = useWatch("price", form);

  const isButtonDisabled = !(
    title &&
    description &&
    categoryId &&
    price !== undefined &&
    price !== null
  );

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
            <Input
              placeholder="Выберите категорию"
              size="large"
              onClick={showModal}
              readOnly
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
            <Input placeholder="Введите цену" type="number" size="large" />
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

          <NeedField selectedCategory={selectedCategory} />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-button"
              disabled={isButtonDisabled}
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
        <CategoryModal
          form={form}
          isModalCategoryOpen={isModalCategoryOpen}
          setIsModalCategoryOpen={setIsModalCategoryOpen}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </Spin>
    </Content>
  );
};
export default CreateItemPage;
