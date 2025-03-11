import { Breadcrumb, Button } from "antd";

const BreadcrumbNavigation = ({ breadcrumb, onSelectCategory, onGoBack }) => {
  const breadcrumbItems = breadcrumb.map((item, index) => ({
    title:
      index === 0 ? (
        item.titleRu
      ) : (
        <span onClick={() => onSelectCategory(item)}>{item.titleRu}</span>
      ),
    key: item?.id || `breadcrumb-${index}`, // Уникальный ключ
  }));

  return (
    <div>
      <Breadcrumb style={{ marginBottom: 10 }} items={breadcrumbItems} />
      <Button
        onClick={onGoBack}
        disabled={breadcrumb.length <= 1}
        style={{ marginBottom: 10 }}
      >
        Назад
      </Button>
    </div>
  );
};

export default BreadcrumbNavigation;
