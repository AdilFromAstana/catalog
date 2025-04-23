import React, { useState } from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import WeeklyVisitsChart from "./components/WeeklyVisitsChart";
import TopVisitedProduct from "./components/TopVisitedProduct";
import ProductStatsTable from "./components/ProductStatsTable";
import dayjs from "dayjs";
import "./ProductAnalyticsPage.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProductAnalyticsPage = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    dayjs().startOf("week"),
  );

  const handlePrevWeek = () => {
    setCurrentWeekStart((prev) => prev.subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) => prev.add(1, "week"));
  };

  const dateRange = [currentWeekStart, currentWeekStart.endOf("week")];
  const isNextWeekDisabled = currentWeekStart
    .add(1, "week")
    .isAfter(dayjs(), "week");

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Button onClick={handlePrevWeek} icon={<LeftOutlined />} />
        <Title level={5} style={{ margin: 0, color: "#4f4f4f" }}>
          {dateRange[0].format("DD.MM")} – {dateRange[1].format("DD.MM.YYYY")}
        </Title>
        <Button
          onClick={() => (isNextWeekDisabled ? null : handleNextWeek())}
          icon={<RightOutlined />}
          style={{
            opacity: isNextWeekDisabled ? "0.5" : "1",
            cursor: isNextWeekDisabled ? "not-allowed" : "pointer",
          }}
        />
      </div>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="📊 Посещения магазина за неделю">
            <WeeklyVisitsChart dateRange={dateRange} />
          </Card>
        </Col>

        <Col span={24}>
          <Card title="🔥 Топ товар по посещениям">
            <TopVisitedProduct dateRange={dateRange} />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="📋 Таблица по товарам"
            styles={{
              body: {
                padding: 0,
                overflow: "hidden",
              },
            }}
          >
            <ProductStatsTable dateRange={dateRange} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductAnalyticsPage;
