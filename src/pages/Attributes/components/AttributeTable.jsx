import { Input, Table } from "antd";
import { useState } from "react";
import { useFetchAttributes } from "../../../firestoreService";

const AttributeTable = ({ attribute, onSelectAttribute }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useFetchAttributes({
    endPoint: "attributes/getAll",
    titleRu: searchQuery,
  });

  return (
    <Table
      dataSource={data}
      onRow={(record) => ({
        onClick: () => onSelectAttribute(record),
      })}
      columns={[
        {
          key: "titleRu",
          dataIndex: "titleRu",
          title: (
            <div>
              <span>Название (RUS)</span>
              <Input.Search
                placeholder="Поиск..."
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: 150, marginLeft: 10 }}
                allowClear
              />
            </div>
          ),
          width: 250,
        },
        {
          key: "titleKz",
          dataIndex: "titleKz",
          title: (
            <div>
              <span>Название (KAZ)</span>
              <Input.Search
                placeholder="Поиск..."
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: 150, marginLeft: 10 }}
                allowClear
              />
            </div>
          ),
          width: 250,
        },
        { key: "code", dataIndex: "code", title: "Код", width: 200 },
      ]}
      pagination
    />
  );
};

export default AttributeTable;
