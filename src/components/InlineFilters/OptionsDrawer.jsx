import { Button, Checkbox, Drawer, List } from "antd";
import { memo } from "react";

const OptionsDrawer = memo(
  ({
    visible,
    onClose,
    activeFilter,
    filteredOptions,
    tempFilters,
    onSelectItem,
    onReset,
    onApply,
    title,
  }) => (
    <Drawer
      title={title}
      placement="bottom"
      onClose={onClose}
      open={visible}
      height="90svh"
      styles={{
        header: {
          color: "#4f4f4f",
          fontSize: "24px",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingTop: 12,
        },
      }}
      rootClassName="inline-filters-header"
    >
      {activeFilter && (
        <div style={{ flex: 1, overflowY: "auto", marginTop: 10 }}>
          <List
            dataSource={filteredOptions[activeFilter]?.options || []}
            renderItem={(option) => (
              <List.Item>
                <Checkbox
                  style={{ width: "100%", color: "#4f4f4f", fontSize: 20 }}
                  checked={tempFilters[activeFilter]?.includes(option.value)}
                  onChange={() => onSelectItem(activeFilter, option.value)}
                >
                  {option.name} ({option.count})
                </Checkbox>
              </List.Item>
            )}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          paddingTop: "20px",
          borderTop: "2px solid black",
        }}
      >
        <Button size="large" onClick={onReset} style={{ width: "100%" }}>
          Сбросить
        </Button>
        <Button
          size="large"
          onClick={onApply}
          type="primary"
          style={{ width: "100%", background: "#4f4f4f" }}
        >
          Применить
        </Button>
      </div>
    </Drawer>
  ),
);
export default OptionsDrawer;
