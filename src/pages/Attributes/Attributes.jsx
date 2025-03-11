import AttributeTable from "./components/AttributeTable";
import EditAttributeModal from "./components/EditAttributeModal";
import CreateAttributeModal from "./components/CreateAttributeModal";
import { Button, Typography } from "antd";
import { useState } from "react";
import "./style.css";

const { Title } = Typography;

const Attributes = () => {
  const [attribute, setAttribute] = useState({});

  const [selectedItem, setSelectedItem] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedAttributes, setEditedAttributes] = useState(
    selectedItem?.attributes || [],
  );

  const selectAttribute = (newAttribute) => {
    setSelectedItem(newAttribute);
    setEditedAttributes(newAttribute.attributes || []);
    setIsEditModalOpen(true);
  };

  return (
    <div
      style={{
        background: "white",
        minHeight: "calc(100vh - 64px)",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Title level={2}>Параметры</Title>
        <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>
          Создать параметр
        </Button>
      </div>
      <AttributeTable
        attribute={attribute}
        onSelectAttribute={selectAttribute}
      />
      <EditAttributeModal
        selectedItem={selectedItem}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        attributes={editedAttributes}
        setAttributes={setEditedAttributes}
      />
      <CreateAttributeModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Attributes;
