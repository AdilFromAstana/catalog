import { memo, useState } from "react";

const MobileProductGallery = memo(
  ({ images, currentImage, onImageClick, onImageZoom }) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 50) {
        // Свайп влево
        onImageClick((currentImage + 1) % images.length);
      }

      if (touchStart - touchEnd < -50) {
        // Свайп вправо
        onImageClick((currentImage - 1 + images.length) % images.length);
      }
    };

    return (
      <div className="mobile-item-gallery">
        <div
          className="mobile-image-container"
          onClick={() => onImageZoom(currentImage)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            className="mobile-image"
            src={images[currentImage]?.url || ""}
            alt="product"
          />
        </div>
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={image.url}
              src={image.url}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                currentImage === index ? "active-thumbnail" : ""
              }`}
              onClick={() => onImageClick(index)}
            />
          ))}
        </div>
      </div>
    );
  },
);
export default MobileProductGallery;
