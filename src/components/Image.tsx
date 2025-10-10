import type { ImageType } from "../types/types"

interface ImageProps {
  image: ImageType;
  className?: string;
};

export const Image = (props: ImageProps) => {
  const { url, title } = props.image;
  const { className } = props;

  const replaceUrl = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/400x300?text=Image Error :(";
  };

  return (
    <div className={`flex flex-shrink-0 ${className}`}>
      <img src={url} title={title} className={`rounded-md shadow-sm size-full`}
        onError={(e) => replaceUrl(e)} />
    </div>
  );
};
