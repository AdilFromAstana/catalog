const BestSelections = ({ images = [] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        margin: "20px 0",
      }}
    >
      {images.map((img) => (
        <div
          key={img?.link}
          style={{
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          <img src={img.link} alt={img.link} width="100%" />
        </div>
      ))}
    </div>
  );
};
export default BestSelections;
