import React from "react";
import { Carousel } from "antd";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import { hotFlowers, mostSoldFlowers, roseFlowers } from "../../common/initialData";

const MainPage = () => {
  return (
    <div>
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
          <Carousel autoplay draggable autoplaySpeed={5000} speed={1500}>
            <div>
              <img
                src="https://i.ibb.co.com/PvPGS213/photo-2025-04-22-15-58-03.webp"
                alt="Слайд 1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co.com/n8b4zqpt/3000.png"
                alt="Слайд 2"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div
        style={{
          margin: "0 20px",
          marginTop: 40,
        }}
      >
        <RelatedCarousel
          id="hot"
          title="Хит продаж"
          products={hotFlowers}
          isLoading={false}
        />
        <RelatedCarousel
          id="best"
          title="Популярные"
          products={mostSoldFlowers}
          isLoading={false}
        />
        <RelatedCarousel
          id="roses"
          title="Розы всем!"
          products={roseFlowers}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default MainPage;
