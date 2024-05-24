export interface ExampleCarouselImageProps {
  text: string;
  image: string;
  size: number;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  text,
  size,
  image,
}) => {
  return <img src={image} width={size} alt={text} />;
};

export default ExampleCarouselImage;
