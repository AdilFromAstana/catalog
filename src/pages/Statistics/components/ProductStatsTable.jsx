import React from "react";
import { Table } from "antd";
import { createStyles } from "antd-style";

const data = [
  {
    key: "1",
    title: "Микс роз",
    saved: 42,
    shared: 15,
    inCart: 25,
    price: 20250,
    category: "Цветы",
  },
  {
    key: "2",
    title: "Кустовые розы",
    saved: 35,
    shared: 10,
    inCart: 18,
    price: 38675,
    category: "Цветы",
  },
  {
    key: "3",
    title: "51 роза",
    saved: 60,
    shared: 25,
    inCart: 40,
    price: 36575,
    category: "Цветы",
  },
  {
    key: "4",
    title: "Juliette Roses",
    saved: 20,
    shared: 8,
    inCart: 12,
    price: 16200,
    category: "Цветы",
  },
  {
    key: "5",
    title: "Пионы розовые (7 шт.)",
    saved: 25,
    shared: 10,
    inCart: 14,
    price: 20000,
    category: "Цветы",
  },
  {
    key: "6",
    title: "Орхидеи фиолетовые",
    saved: 18,
    shared: 6,
    inCart: 10,
    price: 17600,
    category: "Цветы",
  },
  {
    key: "7",
    title: "Лилии белые",
    saved: 22,
    shared: 9,
    inCart: 11,
    price: 13300,
    category: "Цветы",
  },
  {
    key: "8",
    title: "Гвоздики красные",
    saved: 12,
    shared: 5,
    inCart: 7,
    price: 9000,
    category: "Цветы",
  },
  {
    key: "9",
    title: "Альстромерии микс",
    saved: 19,
    shared: 6,
    inCart: 10,
    price: 9500,
    category: "Цветы",
  },
  {
    key: "10",
    title: "Белые розы (25 шт.)",
    saved: 30,
    shared: 12,
    inCart: 20,
    price: 14400,
    category: "Цветы",
  },
];

const columns = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
    fixed: "left",
    width: 200,
  },
  {
    title: "Сохранили",
    dataIndex: "saved",
    key: "saved",
  },
  {
    title: "Поделились",
    dataIndex: "shared",
    key: "shared",
  },
  {
    title: "В корзине",
    dataIndex: "inCart",
    key: "inCart",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
    render: (price) => `${price}₸`,
  },
  {
    title: "Категория",
    dataIndex: "category",
    key: "category",
  },
];

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const ProductAnalyticsPage = () => {
  const { styles } = useStyle();
  return (
    <Table
      className={`${styles.customTable} small-font-table`}
      columns={columns}
      dataSource={data}
      scroll={{ x: "max-content" }}
      pagination={false}
    />
  );
};

export default ProductAnalyticsPage;
