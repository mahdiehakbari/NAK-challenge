import styled from '@emotion/styled';
import colors from '../../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Sidebar = styled.nav`
  width: 240px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Profile = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${colors.backgroundGray};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #a0a0a0;
  font-size: 14px;
`;
export const MenuItem = styled.li<{ last?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ last }) => (last ? '0' : '15px')};
  cursor: pointer;
  gap: 8px;
`;

export const Logout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 8px;
  color: #000;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px;
  background-color: ${colors.backgroundGray};
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

export const Title = styled.h2`
  color: #003366;
  margin-bottom: 15px;
`;
export const Text = styled.p<{ noMargin?: boolean }>`
  color: #003366;
  font-weight: 600;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '10px')};
`;
