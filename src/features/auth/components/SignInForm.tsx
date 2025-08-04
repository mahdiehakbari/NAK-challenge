/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form';
import { formWrapper, inputStyle, buttonStyle } from './styles';

type FormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    // do login
  };

  return (
    <form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        type='email'
        placeholder='Email'
        {...register('email')}
        css={inputStyle}
      />
      <input
        type='password'
        placeholder='Password'
        {...register('password')}
        css={inputStyle}
      />
      <button type='submit' css={buttonStyle}>
        Login
      </button>
    </form>
  );
};
