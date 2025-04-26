import React, { memo } from "react";
import { Splitter } from "antd";
import { RightOutlined } from "@ant-design/icons";

const renderCategory = (cat, onClick, selected) => {
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
      onClick={() => onClick(cat)}
    >
      <span>{cat.titleRu}</span>
      {clickable && <RightOutlined style={{ fontSize: 12 }} />}
    </div>
  );
};

const DesktopCategory = memo(
  ({
    firstLevelCategories,
    secondLevelCategories,
    thirdLevelCategories,
    onSelectCategory,
    selectedFirst,
    selectedSecond,
    selectedThird,
  }) => {
    return (
      <Splitter style={{ height: 400 }}>
        <Splitter.Panel
          resizable={false}
          style={{ padding: 8, background: "#fff" }}
        >
          {firstLevelCategories.map((cat) =>
            renderCategory(cat, onSelectCategory, selectedFirst),
          )}
        </Splitter.Panel>
        <Splitter.Panel
          resizable={false}
          style={{ padding: 8, background: "#fff" }}
        >
          {secondLevelCategories.map((cat) =>
            renderCategory(cat, onSelectCategory, selectedSecond),
          )}
        </Splitter.Panel>
        <Splitter.Panel
          resizable={false}
          style={{ padding: 8, background: "#fff" }}
        >
          {thirdLevelCategories.map((cat) =>
            renderCategory(cat, onSelectCategory, selectedThird),
          )}
        </Splitter.Panel>
      </Splitter>
    );
  },
);

export default DesktopCategory;
