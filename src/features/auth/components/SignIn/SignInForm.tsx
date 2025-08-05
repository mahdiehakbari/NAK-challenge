import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  FormWrapper,
  Input,
  Title,
  FlexRow,
  LoginButton,
  SingUpButton,
  ErrorMessage,
  InputWrapper,
} from './style/styles';
import { FaArrowRight } from 'react-icons/fa';
import { useLogin } from './hooks';
import { useAuthStore } from '../../store/useAuthStore';

type TFormValues = {
  userName: string;
  password: string;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();
  const { t } = useTranslation();
  const setAuthData = useAuthStore((state) => state.setAuthData);
  const [serverError, setServerError] = useState<string | null>(null);
  const apiUrl = 'https://nak-interview.darkube.app/auth/login';
  const [loading, setLoading] = useState(false);

  const { login } = useLogin(apiUrl);
  const navigate = useNavigate();

  const onSubmit = async (data: TFormValues) => {
    setServerError(null);
    setLoading(true);

    const token = await login(data, setServerError);

    setLoading(false);

    if (!token) return;

    setAuthData(token, data.userName);
    navigate('/dashboard');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <Title>{t('sign_in')}</Title>

      <InputWrapper>
        <Input
          type='text'
          placeholder={t('user_name')}
          {...register('userName', { required: t('user_name_required') })}
          hasError={!!errors.userName || !!serverError}
        />
        {(errors.userName || serverError) && (
          <ErrorMessage>{errors.userName?.message || serverError}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper extraMargin>
        <Input
          type='password'
          placeholder={t('password')}
          {...register('password', { required: t('password_required') })}
          hasError={!!errors.password || !!serverError}
        />
        {(errors.password || serverError) && (
          <ErrorMessage>{errors.password?.message || serverError}</ErrorMessage>
        )}
      </InputWrapper>

      <FlexRow>
        <SingUpButton type='button' onClick={handleSignUpClick}>
          {t('sign_up')}
        </SingUpButton>
        <LoginButton type='submit'>
          {loading ? 'Loading...' : <FaArrowRight />}
        </LoginButton>
      </FlexRow>
    </FormWrapper>
  );
};
