import React from "react";
import "./ExampleCarouselImage.css"; // Import the CSS file for styling

interface ExampleCarouselImageProps {
  text: string;
  image: string;
  size: number;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  text,
  size,
  image,
}) => {
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="example-carousel-image-container" style={containerStyle}>
      <div className="example-carousel-image" style={backgroundStyle} />
      <span className="example-carousel-image-text">{text}</span>
    </div>
  );
};

export default ExampleCarouselImage;
