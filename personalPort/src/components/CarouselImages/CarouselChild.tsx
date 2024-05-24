import React from "react";
import image1 from "./IMG_1263.jpg";
export interface ExampleCarouselImageProps {
  text: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  text,
}) => {
  return <img src={image1} width="100" alt={text} />;
};

export default ExampleCarouselImage;
