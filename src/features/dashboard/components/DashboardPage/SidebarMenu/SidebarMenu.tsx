import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Logout,
  MenuItem,
  MenuList,
  Profile,
  Sidebar,
  UserName,
} from '../style/styles';

import type { ISidebarProps } from './types';

export const SidebarMenu = ({ userName, openModal }: ISidebarProps) => {
  const { t } = useTranslation();

  return (
    <Sidebar>
      <div>
        <Profile>
          <Avatar>👤</Avatar>
          <UserName>{userName}</UserName>
        </Profile>

        <MenuList>
          <MenuItem>
            <span>⚙️</span> {t('attributes')}
          </MenuItem>
          <MenuItem last>
            <span>📦</span>
            {t('products')}
          </MenuItem>
        </MenuList>
      </div>

      <Logout onClick={openModal}>
        <span>↩️</span> {t('logout')}
      </Logout>
    </Sidebar>
  );
};
