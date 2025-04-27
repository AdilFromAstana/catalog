import { Breadcrumb } from "antd";

const BreadcrumbNavigation = ({ breadcrumb, onSelectCategory, onGoBack }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Breadcrumb>
        {breadcrumb.map((item, index) => (
          <Breadcrumb.Item key={item.id || "root"}>
            <span
              style={{
                cursor: "pointer",
                color: index !== breadcrumb.length - 1 ? "#1890ff" : "black",
              }}
              onClick={() => {
                if (index !== breadcrumb.length - 1) {
                  onSelectCategory(item, true, index);
                }
              }}
            >
              {item.titleRu}
            </span>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNavigation;
