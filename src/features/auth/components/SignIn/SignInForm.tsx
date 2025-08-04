import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormWrapper,
  Input,
  Title,
  FlexRow,
  LoginButton,
  SingUpButton,
} from './styles';
import { FaArrowRight } from 'react-icons/fa';
import type { TFormValues } from './types';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = (data: TFormValues) => {
    console.log(data);
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>{t('sign_in')}</Title>
      <Input
        type='text'
        placeholder={t('user_name')}
        {...register('userName')}
      />
      <Input
        type='password'
        placeholder={t('password')}
        extraMargin
        {...register('password')}
      />
      <FlexRow>
        <SingUpButton type='button' onClick={handleSignUpClick}>
          {t('sign_up')}
        </SingUpButton>
        <LoginButton type='submit'>
          <FaArrowRight />
        </LoginButton>
      </FlexRow>
    </FormWrapper>
  );
};
