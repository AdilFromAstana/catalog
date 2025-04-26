import { Carousel } from "antd";
import { useEffect, useState } from "react";
import desktopAprelBanner from "../../../../assets/desktopAprelBanner.png";
import desktopTulpan from "../../../../assets/desktopTulpan.png";
import "./BannersCarousel.css";

const BannersCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="banners-carousel">
      <div className="banners-carousel__wrapper">
        <Carousel
          autoplay
          draggable
          autoplaySpeed={4000}
          speed={1500}
          dots={null}
        >
          <div className="banners-carousel__slide">
            <img
              src={
                isMobile
                  ? "https://i.ibb.co.com/PvPGS213/photo-2025-04-22-15-58-03.webp"
                  : desktopAprelBanner
              }
              alt="Слайд 1"
              className="banners-carousel__image"
            />
          </div>
          <div className="banners-carousel__slide">
            <img
              src={
                isMobile
                  ? "https://i.ibb.co.com/n8b4zqpt/3000.png"
                  : desktopTulpan
              }
              alt="Слайд 2"
              className="banners-carousel__image"
            />
          </div>
          {isMobile && (
            <div className="banners-carousel__slide">
              <video
                autoPlay
                muted
                loop
                playsInline
                width="100%"
                preload="none"
                poster="video.mp4"
                className="banners-carousel__video"
              >
                <source src="video.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default BannersCarousel;
