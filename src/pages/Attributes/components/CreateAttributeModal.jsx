import { Button, Input, Modal, Table, Form, Row, Col } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { memo, useEffect, useState } from "react";
import { api, useAddData } from "../../../firestoreService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LOCAL_STORAGE_KEY = "attribute_form_data";

const CreateAttributeModal = memo(({ isOpen, onClose }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [options, setOptions] = useState([]);
  const isLoading = false;

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.setFieldsValue(parsedData.formValues);
      setOptions(parsedData.options);
    }
  }, [form]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const formValues = form.getFieldsValue();
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ formValues, options }),
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [form, options]);

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleEditOptions = (index, field, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = { ...updatedOptions[index], [field]: value };
    setOptions(updatedOptions);
  };

  const addAttribute = () => {
    setOptions([...options, { code: "", optionRu: "", optionKz: "" }]);
  };

  const mutation = useMutation({
    mutationFn: (newAttribute) => api.post("attributes/create", newAttribute),
    onSuccess: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      queryClient.invalidateQueries(["attributes"]);
      onClose();
    },
    onError: (error) => {
      console.error("Ошибка при сохранении:", error);
    },
  });

  const saveChanges = () => {
    form.validateFields().then((values) => {
      const attributeData = { ...values, options };
      console.log("Отправка данных:", attributeData);
      mutation.mutate(attributeData);
    });
  };

  return (
    <Modal
      title="Создать параметр"
      open={isOpen}
      onCancel={onClose}
      width="70vw"
      footer={
        <>
          <Button onClick={onClose}>Закрыть</Button>
          <Button type="primary" onClick={saveChanges} loading={isLoading}>
            {isLoading ? "Сохранение..." : "Сохранить"}
          </Button>
        </>
      }
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Код параметра"
              name="code"
              rules={[{ required: true, message: "Введите код" }]}
            >
              <Input placeholder="Код параметра" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Название (Рус)"
              name="titleRu"
              rules={[
                { required: true, message: "Введите название на русском" },
              ]}
            >
              <Input placeholder="Название (Рус)" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Название (Қаз)"
              name="titleKz"
              rules={[
                { required: true, message: "Введите название на казахском" },
              ]}
            >
              <Input placeholder="Название (Қаз)" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Варианты">
          {options.length > 0 ? (
            <Table
              dataSource={options.map((attr, index) => ({
                key: index,
                ...attr,
                index,
              }))}
              columns={[
                {
                  key: "code",
                  dataIndex: "code",
                  title: "Code (EN)",
                  render: (text, record) => (
                    <Input
                      value={text}
                      onChange={(e) =>
                        handleEditOptions(record.index, "code", e.target.value)
                      }
                    />
                  ),
                  width: 200,
                },
                {
                  key: "optionRu",
                  dataIndex: "optionRu",
                  title: "Вариант (Рус)",
                  render: (text, record) => (
                    <Input
                      value={text}
                      onChange={(e) =>
                        handleEditOptions(
                          record.index,
                          "optionRu",
                          e.target.value,
                        )
                      }
                    />
                  ),
                  width: 200,
                },
                {
                  key: "optionKz",
                  dataIndex: "optionKz",
                  title: "Вариант (Қаз)",
                  render: (text, record) => (
                    <Input
                      value={text}
                      onChange={(e) =>
                        handleEditOptions(
                          record.index,
                          "optionKz",
                          e.target.value,
                        )
                      }
                    />
                  ),
                  width: 200,
                },
                {
                  key: "actions",
                  title: "Действия",
                  render: (_, record) => (
                    <Button
                      type="text"
                      icon={<DeleteOutlined style={{ color: "red" }} />}
                      onClick={() => handleDeleteOption(record.index)}
                    />
                  ),
                  width: 100,
                },
              ]}
              pagination={false}
            />
          ) : (
            <p>Нет вариантов</p>
          )}
        </Form.Item>
      </Form>
      <Button
        type="dashed"
        onClick={addAttribute}
        block
        icon={<PlusOutlined />}
      >
        Добавить вариант
      </Button>
    </Modal>
  );
});

export default CreateAttributeModal;
