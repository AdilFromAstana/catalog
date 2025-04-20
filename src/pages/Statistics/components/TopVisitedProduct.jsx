import React from "react";
import { Pie } from "react-chartjs-2";
import { Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const topProducts = [
  {
    title: "51 роза (букет из премиальных цветов)",
    visits: 280,
  },
  {
    title: "Кустовые розы (букет из премиальных цветов)",
    visits: 230,
  },
  {
    title: "Орхидеи фиолетовые (2 ветки)",
    visits: 190,
  },
  {
    title: "Пионы розовые (букет 7 шт.)",
    visits: 150,
  },
];

const TopVisitedProduct = () => {
  const data = {
    labels: topProducts.map((p) => p.title),
    datasets: [
      {
        label: "Посещений",
        data: topProducts.map((p) => p.visits),
        backgroundColor: ["#1890ff", "#ffc53d", "#73d13d", "#ff7875"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Typography.Title level={5} style={{ textAlign: "center" }}>
        Топ посещаемых товаров
      </Typography.Title>
      <Pie data={data} />
    </div>
  );
};

export default TopVisitedProduct;
