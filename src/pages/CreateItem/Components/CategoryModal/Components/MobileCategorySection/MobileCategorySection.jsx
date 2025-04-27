import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";
import BreadcrumbNavigation from "../../../../../../components/BreadcrumbNavigation";
import { goBack } from "../../../../../../redux/categoriesSlice";

const MobileCategorySection = ({ onSelect }) => {
  const dispatch = useDispatch();
  const { breadcrumb, categories } = useSelector((state) => state.categories);

  return (
    <>
      <BreadcrumbNavigation
        breadcrumb={breadcrumb}
        onGoBack={() => dispatch(goBack())}
        onSelectCategory={onSelect}
      />
      <List
        dataSource={categories}
        renderItem={(cat) => (
          <List.Item
            onClick={() => onSelect(cat)}
            style={{ cursor: "pointer" }}
          >
            <List.Item.Meta title={cat.titleRu} />
          </List.Item>
        )}
      />
    </>
  );
};

export default MobileCategorySection;
