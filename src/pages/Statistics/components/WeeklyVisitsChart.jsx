import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const WeeklyVisitsChart = ({ dateRange }) => {
  const generateWeeklyVisits = (startDate) => {
    return Array.from({ length: 7 }, (_, i) => {
      const daySeed = Number(startDate.add(i, "day").format("YYYYMMDD"));
      const random = Math.abs(Math.sin(daySeed) * 10000);
      return Math.floor(100 + (random % 200));
    });
  };

  const visits = generateWeeklyVisits(dateRange[0]);

  const dates = Array.from({ length: 7 }, (_, i) =>
    dateRange[0].add(i, "day").format("YYYY-MM-DD"),
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Посещения",
        data: visits,
        borderColor: "#1890ff",
        backgroundColor: "rgba(24,144,255,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            const rawLabel = tooltipItems[0].label;
            const date = dayjs(rawLabel);
            return `${date.format("dd")}, ${date.format("DD.MM")}`;
          },
          label: function (tooltipItem) {
            return `Посещения: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value) {
            const label = this.getLabelForValue(value);
            const d = dayjs(label);
            return [d.format("dd"), d.format("DD.MM")];
          },
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeeklyVisitsChart;
