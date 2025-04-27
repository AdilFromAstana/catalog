import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../../../redux/categoriesSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.categories.searchQuery);

  return (
    <div style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Поиск категории..."
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: 4,
          border: "1px solid #d9d9d9",
        }}
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
};

export default SearchInput;
