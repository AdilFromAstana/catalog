/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Form, Input, List, message, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { useGetDataById, useUpdateData, useUploadFile } from "../../firestoreService";
import "./UpdateItemPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { CloseOutlined } from "@ant-design/icons";

const UpdateItemPage = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [form] = Form.useForm();
  const params = useParams();
  const id = params["my-item"];
  const nav = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.map((file) => ({
      file,
      previewURL: URL.createObjectURL(file),
      isNew: true,
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

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const uploadedImageURLs = await Promise.all(
        uploadedImages.map(async (image, index) => {
          const url = image.file
            ? await useUploadFile(image.file)
            : image.previewURL;
          return { url, priority: index };
        })
      );
      const data = { ...form.getFieldsValue(), images: uploadedImageURLs };
      await useUpdateData("items", id, data);
      message.success("Данные успешно сохранены!");
      setIsProductUpdated(true);
    } catch (e) {
      message.error("Ошибка при сохранении данных.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data: item } = useGetDataById("items", id);
      if (item.images) {
        setUploadedImages(
          item.images.map((image) => ({
            previewURL: image.url,
            isNew: false,
            ...image,
          }))
        );
      }
      form.setFieldsValue(item);
      window.scrollTo({
        top: 0,
      });
      console.log("item: ", item);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <Content className="content">
      <Spin spinning={isLoading}>
        <h1>Редактирование товара</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          className="form"
        >
          <Form.Item
            name="title"
            label="Название товара"
            rules={[{ required: true, message: "Введите название товара" }]}
          >
            <Input placeholder="Введите название" size="large" />
          </Form.Item>

          <Form.Item label="Категория" name="categoryRu">
            <Input disabled size="large" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Описание товара"
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
                      className="item-image"
                      onClick={() => handlePreview(item.previewURL)}
                    />
                  </List.Item>
                )
              }
            />
          </Form.Item>

          <Form.Item>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
                size="large"
              >
                Сохранить изменения
              </Button>
              <Button
                type="primary"
                danger
                htmlType="button"
                className="submit-button"
                size="large"
              >
                Отменить
              </Button>
            </div>
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
        <Modal open={isProductUpdated} footer={null} maskClosable={false}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginTop: "20px" }}>Товар успешно обновлен!</h2>
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
export default UpdateItemPage;
