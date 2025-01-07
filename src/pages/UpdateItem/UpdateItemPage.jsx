import { Button, Form, Input, List, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { getDataById } from "../../firestoreService";
import "./UpdateItemPage.css";
import { useParams } from "react-router-dom";

const UpdateItemPage = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [form] = Form.useForm();
  const params = useParams();
  const id = params["my-item"];

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

  const handleUpdate = () => {};

  const allImages = [...existingImages, ...uploadedImages];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const item = await getDataById("items", id);
      if (item.images) {
        setExistingImages(
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
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="form-container">
      <Spin spinning={isLoading}>
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
              dataSource={[...allImages, { isUploadButton: true }]}
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
      </Spin>
    </div>
  );
};
export default UpdateItemPage;
