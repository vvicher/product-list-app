import { createContext } from 'react';
import type { ProductItemType } from '../types/types';

export const DataContext = createContext({
  items: [] as ProductItemType[],
  initData: () => { },
});
