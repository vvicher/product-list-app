import { useLocation } from "react-router"

export const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="size-full flex flex-col items-center justify-center bg-gray-200">
      <h1 className="mb-3 text-3xl text-gray-600">Error 404</h1>
      <h2 className="text-xl text-gray-800">Requested page "{pathname}" was not found.</h2>
    </div>
  );
};
