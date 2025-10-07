import React from 'react';
import { Outlet } from "react-router"
import { DataContext } from '../contexts/DataContext';

export const Layout = () => {
  const { initData } = React.useContext(DataContext);

  React.useEffect(() => {
    initData();
  }, []);

  return (
    <Outlet />
  );
};
