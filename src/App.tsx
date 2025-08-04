import { Routes, Route, Navigate } from 'react-router-dom';
import { SignInForm } from './features/auth/components/SignIn/SignInForm';
import SignUpPage from './features/auth/components/Signup';

function App() {
  return (
    <Routes>
      {/* ریدایرکت پیش‌فرض به لاگین */}
      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route path='/login' element={<SignInForm />} />
      <Route path='/signup' element={<SignUpPage />} />
      {/* <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product' element={<Product />} />
        <Route path='/attribute' element={<Attribute />} />

        {/* صفحه 404 ساده */}
      {/* <Route path='*' element={<div>Page not found</div>} />  */}
    </Routes>
  );
}

export default App;
