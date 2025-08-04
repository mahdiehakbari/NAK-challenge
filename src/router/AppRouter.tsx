import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import SignInPage from '../features/auth/components/SignIn/SignInPage';
import SignUpPage from '../features/auth/components/Signup';

// const isAuthenticated = false;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<SignInPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />

      {/* {isAuthenticated ? (
        <>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTES.ATTRIBUTE} element={<AttributePage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      )}

      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
