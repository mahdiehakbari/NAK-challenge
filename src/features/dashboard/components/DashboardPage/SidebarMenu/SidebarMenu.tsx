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

export const SidebarMenu = ({
  userName,
  openModal,
  onSelect,
}: ISidebarProps) => {
  const { t } = useTranslation();

  return (
    <Sidebar>
      <div>
        <Profile>
          <Avatar>👤</Avatar>
          <UserName>{userName}</UserName>
        </Profile>

        <MenuList>
          <MenuItem onClick={() => onSelect('attributes')}>
            <span>⚙️</span> {t('attributes')}
          </MenuItem>
          <MenuItem onClick={() => onSelect('products')}>
            <span>📦</span> {t('products')}
          </MenuItem>
        </MenuList>
      </div>

      <Logout onClick={openModal}>
        <span>↩️</span> {t('logout')}
      </Logout>
    </Sidebar>
  );
};
