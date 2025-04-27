import React, { memo } from "react";
import { Splitter } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const renderCategory = (cat, onSelectCategory, selected) => {
  const clickable = cat.hasChild;
  const isSelected = selected?.id === cat.id;

  return (
    <div
      key={cat.id}
      style={{
        padding: 8,
        cursor: "pointer",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isSelected ? "#e6f7ff" : "#fff",
        fontWeight: isSelected ? 600 : 400,
        color: "#000",
      }}
      onClick={() => onSelectCategory(cat)}
    >
      <span>{cat.titleRu}</span>
      {clickable && <RightOutlined style={{ fontSize: 12 }} />}
    </div>
  );
};

const DesktopCategorySection = memo(({ onSelect }) => {
  const {
    firstLevelCategories,
    secondLevelCategories,
    thirdLevelCategories,
    selectedFirst,
    selectedSecond,
    selectedThird,
  } = useSelector((state) => state.categories);

  console.log("selectedFirst: ", selectedFirst);
  console.log("selectedSecond: ", selectedSecond);
  console.log("selectedThird: ", selectedThird);

  return (
    <Splitter style={{ height: 400 }}>
      <Splitter.Panel
        resizable={false}
        style={{ padding: 8, background: "#fff" }}
      >
        {firstLevelCategories.map((cat) =>
          renderCategory(cat, onSelect, selectedFirst),
        )}
      </Splitter.Panel>
      <Splitter.Panel
        resizable={false}
        style={{ padding: 8, background: "#fff" }}
      >
        {secondLevelCategories.map((cat) =>
          renderCategory(cat, onSelect, selectedSecond),
        )}
      </Splitter.Panel>
      <Splitter.Panel
        resizable={false}
        style={{ padding: 8, background: "#fff" }}
      >
        {thirdLevelCategories.map((cat) =>
          renderCategory(cat, onSelect, selectedThird),
        )}
      </Splitter.Panel>
    </Splitter>
  );
});

export default DesktopCategorySection;
