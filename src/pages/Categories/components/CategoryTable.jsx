import { Input, Table } from "antd";
import { useGetDataByCategory } from "../../../firestoreService";
import { useState } from "react";

const CategoryTable = ({ category, onSelectCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useGetDataByCategory({
    endPoint: "categories/getCategoriesByLevelAndParent",
    level: category.level,
    parentId: category.parentId,
    titleRu: searchQuery,
  });

  return (
    <Table
      dataSource={data?.categories}
      onRow={(record) => ({
        onClick: () => onSelectCategory(record),
      })}
      columns={[
        {
          key: "titleRu",
          dataIndex: "titleRu",
          title: (
            <div>
              <span>Название</span>
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
        { key: "level", dataIndex: "level", title: "Уровень", width: 200 },
        {
          key: "hasChild",
          dataIndex: "hasChild",
          title: "Есть подкатегории",
          render: (value) => (value ? "Да" : "Нет"),
          width: 200,
        },
      ]}
      pagination
    />
  );
};

export default CategoryTable;
