import { useState } from 'react';
import { DataContext } from './DataContext';
import type { ProductItemType } from "../types/types";
import data from "../../data.json";

interface DataProviderProps {
  children: React.ReactNode;
};

export const DataProvider = (props: DataProviderProps) => {
  const [productItems, setProductItems] = useState([] as ProductItemType[]);

  const { children } = props;

  const initData = () => {
    const localStorageData = localStorage.getItem('products');

    if (!localStorageData) {
      localStorage.setItem('products', JSON.stringify(data));
      setProductItems(data);
    } else {
      const items = JSON.parse(localStorageData);
      setProductItems(items);
    };
  };

  return (
    <DataContext.Provider value={{ items: productItems, initData }}>
      {children}
    </DataContext.Provider>
  );
};
