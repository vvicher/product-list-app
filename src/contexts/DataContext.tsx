import { createContext, useState } from 'react';
import type { ProductItemType } from '../types/types';
import data from "../../data.json";

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext({
  items: [] as ProductItemType[],
  displayAlert: () => { },
  initData: () => { },
});

export const DataProvider = (props: DataProviderProps) => {
  const [productItems, setProductItems] = useState([] as ProductItemType[]);

  const { children } = props;

  const initData = () => {
    const localStorageData = localStorage.getItem('products');

    if (!localStorageData) {
      localStorage.setItem('products', JSON.stringify(data));
    }

    const items = JSON.parse(localStorageData ?? "[]")

    setProductItems(items);
  }

  const displayAlert = () => {
    alert('działa');
  };

  return (
    <DataContext.Provider value={{ items: productItems, displayAlert, initData }}>
      {children}
    </DataContext.Provider>
  );
};
