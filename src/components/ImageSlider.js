import { useState, useEffect, useRef, useCallback } from "react";

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = { height: "100%", position: "relative" };
  const slideStyles = {
    with: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
    transition: "transform",
  };
  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [goToNext]);
  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
