import { useTranslation } from 'react-i18next';
import {
  CloseButton,
  LogoutButton,
  ModalContainer,
  Overlay,
} from './styles/styles';
import type { IModalProps } from './types';

export const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}: IModalProps) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        {children}

        <CloseButton onClick={onClose}>{t('no')}</CloseButton>
        <LogoutButton onClick={onConfirm}>{t('yes')}</LogoutButton>
      </ModalContainer>
    </Overlay>
  );
};
