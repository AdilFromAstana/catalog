import { memo } from "react";

const ProductSpecifications = memo(({ product }) => (
  <div className="specifications">
    <h3>Характеристики</h3>
    <ul>
      <li>Кол-во цветов: {product?.flowerCount}</li>
      <li>Высота цветов: {product?.flowerHeight}</li>
      <li>
        Состав букета:{" "}
        {product?.bouquetComposition.map((item) => item.title).join(", ")}
      </li>
    </ul>
  </div>
));
export default ProductSpecifications;
