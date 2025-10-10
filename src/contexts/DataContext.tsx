import { createContext } from 'react';
import type { ProductItemType } from '../types/types';

type DataContextType = {
  items: ProductItemType[];
  loaded: boolean;
  initData: () => void,
  updateProduct: (
    title: string,
    description: string,
    id: string
  ) => void,
};

export const DataContext = createContext<DataContextType>({
  items: [],
  loaded: false,
  initData: () => { },
  updateProduct: () => { },
});
