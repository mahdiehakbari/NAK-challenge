import { Routes, Route, Navigate } from 'react-router-dom';
import { SignInForm } from './features/auth/components/SignIn/SignInForm';
import SignUpPage from './features/auth/components/Signup/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route path='/login' element={<SignInForm />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
