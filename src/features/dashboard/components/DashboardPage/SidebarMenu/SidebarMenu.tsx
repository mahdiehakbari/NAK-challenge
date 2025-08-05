import {
  Avatar,
  Logout,
  MenuItem,
  MenuList,
  Profile,
  Sidebar,
  UserName,
} from '../style/styles';
import type { IDashboardProps } from '../types';

export const SidebarMenu = ({ userName }: IDashboardProps) => {
  return (
    <Sidebar>
      <div>
        <Profile>
          <Avatar>👤</Avatar>
          <UserName>{userName}</UserName>
        </Profile>

        <MenuList>
          <MenuItem>
            <span>⚙️</span> Attributes
          </MenuItem>
          <MenuItem last>
            <span>📦</span> Products
          </MenuItem>
        </MenuList>
      </div>

      <Logout>
        <span>↩️</span> Logout
      </Logout>
    </Sidebar>
  );
};
