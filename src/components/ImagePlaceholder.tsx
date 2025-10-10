import { Image } from "./Image";

interface ImagePlaceholderProps {
  className?: string;
};

export const ImagePlaceholder = (props: ImagePlaceholderProps) => {
  const { className } = props;

  return (
    <Image
      image={{
        url: "https://placehold.co/400x300?text=No Image",
        title: "No Image"
      }}
      className={className}
    />
  );
};
