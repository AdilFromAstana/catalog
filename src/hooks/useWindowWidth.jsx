import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  console.log("windowWidth: ", windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
