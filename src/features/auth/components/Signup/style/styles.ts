import styled from '@emotion/styled';
import colors from '../../../../../styles/colors';

export const FormWrapper = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const InputWrapper = styled.div<{ extraMargin?: boolean }>`
  margin-bottom: ${({ extraMargin }) => (extraMargin ? '70px' : '20px')};
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 12px;
  text-align: left;
  margin-left: 8px;
`;

export const FlexRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SingUpButton = styled('button')`
  border-radius: 40px;
  background: ${colors.primary};
  color: ${colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
`;

export const LoginButton = styled('button')`
  border-radius: 40px;
  width: 116px;
  height: 40px;
  font-weight: 600;
  font-size: 20px;
  line-height: 40px;
  color: ${colors.primary};
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Input = styled.input<{ hasError?: boolean }>`
  padding: 15px 40px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 20px;
  line-hight: 40px;
  border: 2px solid ${({ hasError }) => (hasError ? 'red' : 'transparent')};
  background: ${colors.backgroundGray};
  width: -webkit-fill-available;
  &::placeholder {
    color: ${colors.textColorGray};
    font-weight: 600;
  }
  &:focus-visible {
    outline: none;
  }
`;
