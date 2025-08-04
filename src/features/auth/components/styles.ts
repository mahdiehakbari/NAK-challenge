import { css } from '@emotion/react';

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  margin: 0 auto;
`;

export const inputStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const buttonStyle = css`
  background: #007aff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #005fcb;
  }
`;
