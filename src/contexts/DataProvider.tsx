import { useState } from 'react';
import { DataContext } from './DataContext';
import type { ProductItemType } from "../types/types";
import data from "../../data.json";

interface DataProviderProps {
  children: React.ReactNode;
};

export const DataProvider = (props: DataProviderProps) => {
  const [productItems, setProductItems] = useState([] as ProductItemType[]);
  const [loaded, setLoaded] = useState(false);

  const { children } = props;

  const initData = () => {
    const localStorageData = localStorage.getItem('products');

    if (localStorageData) {
      const items = JSON.parse(localStorageData);
      setProductItems(items);
    } else {
      localStorage.setItem('products', JSON.stringify(data));
      setProductItems(data);
    };

    setLoaded(true);
  };

  const updateProduct = (newTitle: string, newDescription: string, id: string) => {
    const productToUpdateIndex = productItems.findIndex(item => item.id === id);

    const updatedProduct = {
      ...productItems[productToUpdateIndex],
      title: newTitle,
      description: newDescription,
      id: id,
    };

    const newProductItems = productItems.toSpliced(productToUpdateIndex, 1, updatedProduct);

    setProductItems(newProductItems);
    localStorage.setItem('products', JSON.stringify(newProductItems));

    alert('Saved!');
  };

  return (
    <DataContext value={{ items: productItems, loaded, initData, updateProduct }}>
      {children}
    </DataContext>
  );
};
