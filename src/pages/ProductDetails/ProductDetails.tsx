import { useParams } from "react-router"

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="size-full flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl text-blue-700">Details Page "{id}"</h1>
    </div>
  )
}
