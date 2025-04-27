import { useSelector } from "react-redux";
import CategoryButtonList from "./Components/CategoryButtonList";

const PopularAndRecentSection = ({ onSelect }) => {
  const { popularCategories, recentCategories } = useSelector(
    (state) => state.categories,
  );

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          Популярные категории:
        </div>
        <CategoryButtonList
          categories={popularCategories}
          onSelect={onSelect}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          Последние выбранные:
        </div>
        <CategoryButtonList categories={recentCategories} onSelect={onSelect} />
      </div>
    </>
  );
};

export default PopularAndRecentSection;
