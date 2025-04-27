import { Button } from "antd";

const CategoryButtonList = ({ categories, onSelect }) => (
  <div
    style={{ display: "flex", flexDirection: "row", gap: 8, flexWrap: "wrap" }}
  >
    {categories.map((cat) => (
      <Button
        key={cat.id}
        type="default"
        style={{ justifyContent: "start", textAlign: "left" }}
        onClick={() => onSelect(cat)}
      >
        <div style={{ fontWeight: 500 }}>{cat.titleRu}</div>
        <div style={{ fontSize: 12, color: "#999" }}>{cat.fullPath}</div>
      </Button>
    ))}
  </div>
);

export default CategoryButtonList;
