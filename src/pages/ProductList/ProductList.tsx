import React from "react";
import { DataContext } from "../../contexts/DataContext";
import { ListItem } from "./components/ListItem";

export const ProductList = () => {
  const { items } = React.useContext(DataContext);

  return (
    <div className="w-full min-h-full bg-gray-200 flex justify-center">
      <div className="w-2/3 flex flex-col gap-2">
        <h1 className="text-3xl text-blue-700 mt-6 mb-4">Products</h1>
        {items.length && (
          <>
            {items.map(((item, i) => {
              return (
                <div key={i}>
                  <ListItem item={item} />
                </div>
              )
            }))}
          </>
        )}
      </div>
    </div>
  )
}
