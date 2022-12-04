import { FC } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, adminRoutes } from './router';

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
      {adminRoutes.map(route =>
        <Route
          element={<route.element/>}
          key={route.path}
          path={route.path}
        />
      )}
      <Route
        path="*"
        element={<Navigate to="/main/movies" replace />}
      />
    </Routes>
  );
};

export default AppRouter;
