import styled from '@emotion/styled';
import colors from '../../../../../../styles/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 406px;
  text-align: center;
`;

export const CloseButton = styled.button`
  color: #333;
  border: 1px solid ${colors.primary};
  padding: 8px 16px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

export const LogoutButton = styled.button`
  background-color: #c50000;
  width: 100%;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
