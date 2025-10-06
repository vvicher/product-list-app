import type { ProductItemType } from "../../../types/types"
import { Image } from "../../../components/Image";
import { ImagePlaceholder } from "../../../components/ImagePlaceholder";
import { useNavigate } from "react-router";

interface ListItemProps {
  item: ProductItemType;
}

export const ListItem = (props: ListItemProps) => {
  const { id, title, description, images } = props.item;

  const navigate = useNavigate()

  const openProduct = () => {
    navigate(`/product/${id}`)
  }

  const renderFirstImage = () => {
    if (!images?.length) {
      return <ImagePlaceholder styles="w-28 h-[84px]" />
    }

    const image = images[0];

    return (
      <Image
        image={{
          url: image.url,
          title: image.title,
        }}
        styles="w-28 h-[84px]"
      />
    )
  }

  return (
    <div
      className="cursor-pointer flex rounded-lg flex-row p-2 border border-gray-300 bg-white transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
      onClick={() => { openProduct() }}
    >
      {renderFirstImage()}
      <div className="flex flex-col ml-3">
        <h2 className="text-blue-700 text-xl">{title}</h2>
        <p className="text-gray-800 mt-1">{description}</p>
      </div>
    </div>
  )
}
