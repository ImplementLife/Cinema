import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from './router';

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(route =>
        <Route
          element={<route.element/>}
          key={route.path}
          path={route.path}
        />
      )}
    </Routes>
  );
};

export default AppRouter;
