import { Modal } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { memo, useEffect } from "react";

const ImageModal = memo(
  ({ images, currentIndex, visible, onClose, onNext, onPrev }) => {
    useEffect(() => {
      if (visible) {
        document.body.style.overflow = "hidden";
        // Блокируем скролл на iOS
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }, [visible]);

    return (
      <Modal
        open={visible}
        onCancel={onClose}
        footer={null}
        styles={{
          body: {
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onPrev}
            style={{
              position: "absolute",
              left: 20,
              zIndex: 1,
              background: "rgba(0, 0, 0, 0.5)",
              border: "none",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <LeftOutlined style={{ fontSize: 24 }} />
          </button>

          <img
            src={images[currentIndex]?.url}
            alt={`Product ${currentIndex}`}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
          />

          <button
            onClick={onNext}
            style={{
              position: "absolute",
              right: 20,
              zIndex: 1,
              background: "rgba(0, 0, 0, 0.5)",
              border: "none",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <RightOutlined style={{ fontSize: 24 }} />
          </button>
        </div>
      </Modal>
    );
  },
);
export default ImageModal;
