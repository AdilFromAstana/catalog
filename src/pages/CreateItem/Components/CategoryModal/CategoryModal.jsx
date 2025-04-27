import React, { memo, useEffect } from "react";
import { Modal, Spin, Button } from "antd";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "./Components/SearchInput/SearchInput";
import PopularAndRecentSection from "./Components/PopularAndRecentSection/PopularAndRecentSection";
import DesktopCategorySection from "./Components/DesktopCategorySection/DesktopCategorySection";
import MobileCategorySection from "./Components/MobileCategorySection/MobileCategorySection";
import {
  selectCategory,
  resetBreadcrumb,
  loadCategories,
} from "../../../../redux/categoriesSlice";

const CategoryModal = memo(
  ({
    form,
    isModalCategoryOpen,
    setIsModalCategoryOpen,
    selectedCategory,
    setSelectedCategory,
  }) => {
    const width = useWindowWidth();
    const dispatch = useDispatch();
    const { isLoading, categories } = useSelector((state) => state.categories);

    const handleSelect = (cat) => {
      dispatch(selectCategory({ cat, form }));
      setSelectedCategory(cat);
    };

    useEffect(() => {
      if (isModalCategoryOpen && categories.length === 0) {
        dispatch(loadCategories());
      }
    }, [isModalCategoryOpen, categories.length, dispatch]);

    return (
      <Modal
        title="Выберите категорию"
        open={isModalCategoryOpen}
        onCancel={() => {
          setIsModalCategoryOpen(false);
          dispatch(resetBreadcrumb());
        }}
        footer={
          <Button
            type="primary"
            disabled={selectedCategory?.hasChild ?? true}
            onClick={() => {
              form.setFieldValue("categoryId", selectedCategory?.titleRu);
              setIsModalCategoryOpen(false);
            }}
          >
            Выбрать
          </Button>
        }
        width="80vw"
        styles={{ body: { maxHeight: "70vh", overflowY: "auto" } }}
        maskClosable={false}
      >
        <Spin spinning={isLoading}>
          {width >= 768 ? (
            <>
              <SearchInput />
              <PopularAndRecentSection onSelect={handleSelect} />
              <DesktopCategorySection onSelect={handleSelect} />
            </>
          ) : (
            <MobileCategorySection onSelect={handleSelect} />
          )}
        </Spin>
      </Modal>
    );
  },
);

export default CategoryModal;
