import styled from '@emotion/styled';
import colors from '../../../../styles/colors';
import type { IInputProps } from './types';

export const FormWrapper = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 465px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 40px;
  padding: 40px;
  background: #f9f9f9;
`;

export const Title = styled('h1')`
  font-size: 30px;
  font-weight: 800;
  color: ${colors.primary};
  margin: 0px 0px 70px 0px;
`;

export const Input = styled('input')<IInputProps>`
  padding: 15px 40px;
  border-radius: 40px;
  border: 0px;
  font-weight: 600;
  font-size: 20px;
  line-hight: 40px;
  background: ${colors.backgroundGray};
  margin-bottom: ${({ extraMargin }) => (extraMargin ? '70px' : '20px')};
  &::placeholder {
    color: ${colors.textColorGray};
    font-weight: 600;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const FlexRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginButton = styled('button')`
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

export const SingUpButton = styled('button')`
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
