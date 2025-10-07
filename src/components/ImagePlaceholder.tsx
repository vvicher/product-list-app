import { Image } from "./Image";

interface ImagePlaceholderProps {
  styles?: string;
};

export const ImagePlaceholder = (props: ImagePlaceholderProps) => {
  const { styles } = props;

  return (
    <Image
      image={{
        url: "https://placehold.co/400x300?text=No Image",
        title: "No Image"
      }}
      styles={styles}
    />
  );
};
