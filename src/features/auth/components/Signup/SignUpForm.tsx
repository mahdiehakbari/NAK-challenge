import { useForm, type SubmitHandler } from 'react-hook-form';
import {
  FormWrapper,
  Title,
  FlexRow,
  LoginButton,
  SingUpButton,
  ErrorMessage,
  InputWrapper,
  Input,
} from './style/styles';
import { FaArrowRight } from 'react-icons/fa';
import { useSignUp } from './hooks';
import type { TFormValues } from './types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const apiUrl = 'https://nak-interview.darkube.app/users/register';

export const SignUpForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();
  const { signUp } = useSignUp(apiUrl);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setServerError(null);
    setLoading(true);

    const success = await signUp(data, setServerError);
    if (success) {
      alert('Registration successful! Now you can log in.');
      reset();
    }

    setLoading(false);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <Title>{t('sign_up')}</Title>

      <InputWrapper>
        <Input
          type='text'
          placeholder={t('first_name')}
          {...register('firstName', { required: t('first_name_required') })}
          hasError={!!errors.firstName || !!serverError}
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper>
        <Input
          type='text'
          placeholder={t('last_name')}
          {...register('lastName', { required: t('last_name_required') })}
          hasError={!!errors.lastName || !!serverError}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper>
        <Input
          type='text'
          placeholder={t('user_name')}
          {...register('userName', {
            required: t('user_name_required'),
            minLength: {
              value: 3,
              message: t('user_name_min_length'),
            },
          })}
          hasError={!!errors.userName || !!serverError}
        />
        {errors.userName && (
          <ErrorMessage>{errors.userName.message}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper extraMargin>
        <Input
          type='password'
          placeholder={t('password')}
          {...register('password', {
            required: t('password_required'),
            minLength: {
              value: 6,
              message: t('password_min_length'),
            },
          })}
          hasError={!!errors.password || !!serverError}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputWrapper>

      {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

      <FlexRow>
        <LoginButton type='button' onClick={handleSignInClick}>
          {t('sign_in')}
        </LoginButton>
        <SingUpButton type='submit' disabled={loading}>
          {loading ? 'Loading...' : <FaArrowRight />}
        </SingUpButton>
      </FlexRow>
    </FormWrapper>
  );
};
