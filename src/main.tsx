import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import { ProductList } from './pages/ProductList/ProductList';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { NotFound } from './pages/NotFound/NotFound';
import { DataProvider } from './contexts/DataContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataProvider><Outlet /></DataProvider>}>
          <Route index element={<ProductList />} />
          <Route path="product">
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
