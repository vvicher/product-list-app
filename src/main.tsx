import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ProductList } from './pages/ProductList/ProductList';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { NotFound } from './pages/NotFound/NotFound';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="product">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
