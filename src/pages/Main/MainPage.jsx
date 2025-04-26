import React from "react";
import BannersCarousel from "./components/BannersCarousel/BannersCarousel";
import DesktopFiltersPanel from "../../components/DesktopFiltersPanel/DesktopFiltersPanel";
import CategoryQuickAccess from "./components/CategoryQuickAccess/CategoryQuickAccess";
import RelatedCarousel from "../../components/RelatedCarousel/RelatedCarousel";
import BestSelections from "./components/BestSelections/BestSelections";
import afterLongSeparation from "../../assets/afterLongSeparation.png";
import forDischarge from "../../assets/forDischarge.png";
import forMorning from "../../assets/forMorning.png";
import birthDay from "../../assets/birthDay.png";
import {
  hotFlowers,
  mostSoldFlowers,
  roseFlowers,
} from "../../common/initialData";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <div className="mainpage-layout">
        {/* <div className="mainpage-sidebar">
          <DesktopFiltersPanel />
        </div> */}
        <div className="mainpage-content">
          <BannersCarousel />
          <div className="mainpage-inner">
            <CategoryQuickAccess />

            <RelatedCarousel
              id="hot"
              title="Хит продаж"
              products={hotFlowers}
              isLoading={false}
            />

            <BestSelections
              images={[{ link: forMorning }, { link: afterLongSeparation }]}
            />

            <RelatedCarousel
              id="best"
              title="Популярные"
              products={mostSoldFlowers}
              isLoading={false}
            />

            <BestSelections
              images={[{ link: forDischarge }, { link: birthDay }]}
            />

            <RelatedCarousel
              id="roses"
              title="Розы всем!"
              products={roseFlowers}
              isLoading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
