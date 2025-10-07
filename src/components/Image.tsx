import type { ImageType } from "../types/types"

interface ImageProps {
  image: ImageType;
  styles?: string
};

export const Image = (props: ImageProps) => {
  const { url, title } = props.image;
  const { styles } = props;

  const replaceUrl = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/400x300?text=Image Error :(";
  };

  return (
    <div className={`flex flex-shrink-0 ${styles}`}>
      <img src={url} title={title} className={`rounded-md shadow-sm size-full`}
        onError={(e) => replaceUrl(e)} />
    </div>
  );
};
