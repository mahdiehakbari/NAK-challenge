import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoute from '../features/auth/components/PublicRoute/PublicRoute';
import SignInPage from '../features/auth/components/SignIn/SignInPage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute/ProtectedRoute';
import DashboardPage from '../features/dashboard/components/DashboardPage/DashboardPage';
import SignUpPage from '../features/auth/components/Signup/SignUpPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route
        path='/login'
        element={
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        }
      />
      <Route
        path='/signup'
        element={
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        }
      />

      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
