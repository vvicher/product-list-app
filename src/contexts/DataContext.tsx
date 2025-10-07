import { createContext } from 'react';
import type { ProductItemType } from '../types/types';

type DataContextType = {
  items: ProductItemType[];
  initData: () => void,
  updateProduct: (
    title: string,
    description: string,
    id: string
  ) => void,
};

export const DataContext = createContext<DataContextType>({
  items: [],
  initData: () => { },
  updateProduct: () => { },
});
